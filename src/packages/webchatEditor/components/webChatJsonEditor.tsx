import React from "react";
import { CustomizationEntry, IAppState, WebChatStyleOption } from "../../Redux/reduxState";
import { connect } from "react-redux";
import { actionTypes, genericSingleAction } from "../../Redux/actions";
import { Dispatch, AnyAction } from 'redux';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { defaultStyleOptions } from "../constants/defaultStyleOptions";
import {
    MessageBar,
    MessageBarType,

} from 'office-ui-fabric-react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { mergeStyleSets } from '@uifabric/merge-styles';

import { customizationEntries } from "../constants/customizationEntries";

////////////////// Styling //////////////////
const classes = mergeStyleSets({
    resetButtonClassName: {
        float: 'right',
        marginTop: '20px',
    },
    listItem :{
    },
    errors: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxHeight: '60px',
        paddingTop: '5px',
    },
    textField: {
    }
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

}

type PropsType = StateProps & DispatchProps & Props;

export class WebChatJsonEditor extends React.Component<PropsType, LocalState> {
    constructor(props: PropsType) {
        super(props);
        this.state = ({
            textValue: JSON.stringify(this.props.currentStyleOptions, null, 4),
            uniqueErrors: new Set(),
        })
    }

    private onJsonChange = (event: any, newJson?: string) => {
        if (newJson) {
            this.setState({ textValue: newJson });
            var newStyleOptions: WebChatStyleOption
            try {
                newStyleOptions = JSON.parse(newJson);
                let invalidAttributesInJson = this.validateJSON(newStyleOptions);
                if (!invalidAttributesInJson) {
                    this.props.updateRootStateVariable('styleOptions', newStyleOptions);
                }
                this.props.updateRootStateVariable('jsonIsInvalid', false);
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

    private resetToDefault = (event: any) => {
        this.state.uniqueErrors.clear();
        this.setState({ 
            textValue: JSON.stringify(defaultStyleOptions, null, 4),
            uniqueErrors: this.state.uniqueErrors,
        });
        this.props.updateRootStateVariable('jsonIsInvalid', false);
        this.props.updateRootStateVariable('styleOptions', defaultStyleOptions);
    }

    private removeError = (index: number) => {
        const { uniqueErrors } = this.state;
        uniqueErrors.delete(customizationEntries[index].id)
        this.setState({
            uniqueErrors: uniqueErrors
        })
        return true;
    }

    private addError = (index: number) => {
        const { uniqueErrors } = this.state;
        if (!uniqueErrors.has(customizationEntries[index].id)) {
            var addNewError = uniqueErrors.add(customizationEntries[index].id)
            this.setState({
                uniqueErrors: addNewError,
            })
        }
        return false;
    }

    private checkColor = (id: string, index: number) => {
        if ((/^#([0-9A-F]{3}){1,2}$/i).test(`${id}`)) {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }

    private checkRGBA = (id: string, index: number) => {
        if ((/rgba?\((\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*)((?:,\s*[0-9.]*\s*)?)\)/g).test(id)) {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }

    private checkInt = (id: number, index: number) => {
        if (typeof id === 'number') {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }

    private checkBoolean = (id: string, index: number) => {
        if (typeof id === 'boolean') {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }

    private checkPercentage = (id: string, index: number) => {
        if ((/^[0]*?(?<Percentage>[1-9][0-9]?|100)%?$/i).test(id)) {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }
    //TODO: complete dropdown validation

    checkDropDown = (id: string, index: number) => {
        console.log(id)
    }

    //TODO: complete default validation

    checkDefault = (id: string, index: number) => {
        console.log(id)

    }

    private validateJSON = (newJson: any): boolean => {
        let invalidAttributesInJson = false;
        this.props.customizationEntries.map((entry, index) => {
            switch (entry.uiSelectorType) {
                case 'colorSelector':
                    if (this.checkColor(newJson[entry.id], index)){
                        return true;
                    } else {
                        invalidAttributesInJson = true;
                        return false;
                    }
                case 'booleanSelector':
                    if (this.checkBoolean(newJson[entry.id], index)){
                        return true;
                    } else {
                        invalidAttributesInJson = true;
                        return false;
                    }
                case 'rgbaSelector':
                    if (this.checkRGBA(newJson[entry.id], index)){
                        return true;
                    } else {
                        invalidAttributesInJson = true;
                        return false;
                    }
                case 'integerSelector':
                    if (this.checkInt(newJson[entry.id], index)){
                        return true;
                    } else {
                        invalidAttributesInJson = true;
                        return false;
                    }
                case 'percentageSelector':
                    if (this.checkPercentage(newJson[entry.id], index)){
                        return true;
                    } else {
                        invalidAttributesInJson = true;
                        return false;
                    }
                // return true;
                case 'defaultSelector':
                    // return this.checkDefault(newJson[entry.id], index);
                    return true;
                case 'dropDownSelector':
                    // return this.checkDropDown(newJson[entry.id], index);
                    return true;
                default:
                    return true;
            }
        });
        return invalidAttributesInJson;

    }

    render() {
        let newArr = Array.from(this.state.uniqueErrors)
        return (
            <div>
                {this.renderErrorBanner()}
                {
                    newArr.length ?
                        <MessageBar
                            messageBarType={MessageBarType.error}
                            isMultiline={true}
                        > 
                            The following id's may have incorrect values. Please correct before proceeding
                            <div className={classes.errors}>
                                {newArr.map(error => (<li className={classes.listItem}>{error}</li>))}
                            </div>
                        </MessageBar>
                        :
                        null
                }
                <TextField className={classes.textField} onChange={(event: any, newValue?: string) => this.onJsonChange(event, newValue)} label="" multiline rows={35} value={this.state.textValue} />
                <PrimaryButton className={classes.resetButtonClassName} onClick={(event: any) => { this.resetToDefault(event) }} text="Reset to default" />
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
