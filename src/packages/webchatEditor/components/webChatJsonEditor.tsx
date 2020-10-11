import React from "react";
import { withRouter } from "react-router-dom";
import { CustomizationEntry,IAppState, WebChatStyleOption } from "../../Redux/reduxState";
import { connect } from "react-redux";
import { actionTypes, genericSingleAction } from "../../Redux/actions";
import { Dispatch, AnyAction } from 'redux';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { defaultStyleOptions } from "../constants/defaultStyleOptions";
import {
    Link,
    MessageBar,
    MessageBarType,

} from 'office-ui-fabric-react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { ColorSelector } from "./colorSelector";
import { RgbaSelector } from "./rgbaSelector";
import { customizationEntries } from "../constants/customizationEntries";
import { filter, object, unique } from "underscore";
import { CalloutModal } from "./callOutModal";

////////////////// Styling //////////////////
const resetButtonClassName = mergeStyles({
    float: 'right',
    marginTop: '20px'
});

////////////////// WebChatJsonEditor //////////////////
interface StateProps {
    currentStyleOptions: WebChatStyleOption;
    jsonIsInvalid: boolean;
    customizationEntries: CustomizationEntry[];
}

interface DispatchProps {
    updateStyleOptions: (styleOptions: WebChatStyleOption) => void,
    updateRootStateVariable: (stateVariableName: string, value: any) => void
}

interface Props {

}

interface LocalState {
    textValue: string,
    uniqueErrors: Set<String>,
    isCalloutVisible: Boolean,

}

type PropsType = StateProps & DispatchProps & Props;

export class WebChatJsonEditor extends React.Component<PropsType, LocalState> {
    constructor(props: PropsType) {
        super(props);
        this.state = ({textValue: JSON.stringify(this.props.currentStyleOptions, null, 4),
        uniqueErrors: new Set(),
        isCalloutVisible: false,
    })
    }

    checkColor = (id: string, index: number) => {
        const {uniqueErrors} = this.state;
        if ((/^#([0-9A-F]{3}){1,2}$/i).test(`${id}`)) {
            this.state.uniqueErrors.delete(customizationEntries[index].id)
                this.setState({
                    uniqueErrors: uniqueErrors
                })
            return true;
        } else {
            if(!uniqueErrors.has(customizationEntries[index].id)){
                var addNewError = uniqueErrors.add(customizationEntries[index].id)
            this.setState({
                uniqueErrors: addNewError,
            })      
        }
        return false;
    }
    }

    checkRGBA = (id: string, index: number) => {
        const {uniqueErrors} = this.state;
        if((/rgba?\((\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*)((?:,\s*[0-9.]*\s*)?)\)/g).test(id)){
            this.state.uniqueErrors.delete(customizationEntries[index].id)
            this.setState({
                uniqueErrors: uniqueErrors
            })
        return true;
    } else {
        if(!uniqueErrors.has(customizationEntries[index].id)){
            var addNewError = uniqueErrors.add(customizationEntries[index].id)
        this.setState({
            uniqueErrors: addNewError,
        })      
    }
    return false;
}
}

    checkInt = (id: string) => {
        console.log(id)

    }
    checkBoolean = (id: string) => {
        console.log(id)

    }
    checkDropDown = (id: string) => {
        console.log(id)
    }

    checkPercentage = (id: string) => {
        console.log(id)

    }
    checkDefault = (id: string) => {
        console.log(id)

    }

    private validateJSON = (newJson: any, ) => {
       this.props.customizationEntries.map((entry, index) => {
           switch(entry.uiSelectorType){
        case 'colorSelector':
            return  this.checkColor(newJson[entry.id], index);
        case 'booleanSelector':
            return true ;
        case 'rgbaSelector':
            return  this.checkRGBA(newJson[entry.id], index);
        case 'percentageSelector':
            return true;
        case 'defaultSelector':
            return true;
        case 'dropDownSelector':
            return true;
            default:
            return true;
           }
           
        });

    }

    private onJsonChange = (event: any, newJson?: string) => {
        if (newJson) {
            this.setState({textValue: newJson});
            var newStyleOptions: WebChatStyleOption
            newStyleOptions = JSON.parse(newJson);
            this.validateJSON(newStyleOptions);
            try {
                this.props.updateRootStateVariable('jsonIsInvalid', false);
                this.props.updateRootStateVariable('styleOptions', newStyleOptions);
            }
            catch {
                this.props.updateRootStateVariable('jsonIsInvalid', true);
            }
        }
    }

    private renderErrorBanner = () => {
        if (this.props.jsonIsInvalid) {
            return (
                <MessageBar
                    messageBarType={MessageBarType.error}
                    isMultiline={false}
                >
                    Invalid Json!
                </MessageBar>)
        }
    }

    private resetToDefault = (event: any) =>{
        this.setState({textValue: JSON.stringify(defaultStyleOptions, null, 4)});
        this.props.updateRootStateVariable('styleOptions', defaultStyleOptions);
    }
    public toggleCallout = () => {
        this.setState({
            isCalloutVisible: !this.state.isCalloutVisible,
        })
        console.log(this.state.isCalloutVisible)
    }


render(){
    let newArr = Array.from(this.state.uniqueErrors)
        return (
            <div>
                {this.renderErrorBanner()}
                <MessageBar
                  messageBarType={MessageBarType.error}
                  isMultiline={true}
                  dismissButtonAriaLabel="Close"
                >
                {newArr.map(error=>(<li>{error}</li>))}
                </MessageBar>
                <TextField  onChange={(event: any, newValue?: string) => this.onJsonChange(event, newValue)} label="" multiline rows={40} value={this.state.textValue} />
                <PrimaryButton  className={resetButtonClassName} onClick={(event: any) => {this.resetToDefault(event)}} text="Reset to default" /> n
            </div>
        );
    }
}

////////////////// Redux //////////////////

const mapStateToProps = (state: IAppState, ownProps: Props): StateProps => ({
    currentStyleOptions: state.styleOptions,
    jsonIsInvalid: state.jsonIsInvalid,
    customizationEntries: state.customizationEntries,


});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    updateStyleOptions: (styleOptions: WebChatStyleOption) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_STYLE_OPTIONS, { styleOptions }));
    },
    updateRootStateVariable: (stateVariableName: string, value: any) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_ROOT_WEBCHAT_STATE_VARIABlE, { propertyName: stateVariableName, value: value }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WebChatJsonEditor);