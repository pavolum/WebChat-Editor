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
import { PrimaryButton} from 'office-ui-fabric-react';
import { mergeStyleSets } from '@uifabric/merge-styles';

import { customizationEntries } from "../constants/customizationEntries";

////////////////// Styling //////////////////
const classes = mergeStyleSets({
    resetButtonClassName: {
        float: 'right',
        marginTop: '20px',
    },
    MessageBar: {
        width: '300px',
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

    removeError = (index: number) => {
        const { uniqueErrors } = this.state;
        uniqueErrors.delete(customizationEntries[index].id)
        this.setState({
            uniqueErrors: uniqueErrors
        })
        return true;
    }

    addError = (index: number) => {
        const { uniqueErrors } = this.state;
        if (!uniqueErrors.has(customizationEntries[index].id)) {
            var addNewError = uniqueErrors.add(customizationEntries[index].id)
            this.setState({
                uniqueErrors: addNewError,
            })
        }
        return false;
    }

    checkColor = (id: string, index: number) => {
        if ((/^#([0-9A-F]{3}){1,2}$/i).test(`${id}`)) {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }

    checkRGBA = (id: string, index: number) => {
        if ((/rgba?\((\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*)((?:,\s*[0-9.]*\s*)?)\)/g).test(id)) {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }
//TODO: complete integer validation
    checkInt = (id: number, index: number) => {
        if (typeof id === 'number') {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }
//TODO: complete boolean validation

    checkBoolean = (id: string, index: number) => {
        if (typeof id === 'boolean') {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }
//TODO: complete dropdown validation

    checkDropDown = (id: string, index: number) => {
        console.log(id)
    }

    checkPercentage = (id: string, index: number) => {
        if ((/^[0]*?(?<Percentage>[1-9][0-9]?|100)%?$/i).test(id)) {
            return this.removeError(index);
        } else {
            return this.addError(index)
        }
    }
//TODO: complete default validation

    checkDefault = (id: string, index: number) => {
        console.log(id)

    }

    private validateJSON = (newJson: any,) => {
        this.props.customizationEntries.map((entry, index) => {
            switch (entry.uiSelectorType) {
                case 'colorSelector':
                    return this.checkColor(newJson[entry.id], index);
                case 'booleanSelector':
                    return this.checkBoolean(newJson[entry.id], index);
                case 'rgbaSelector':
                    return this.checkRGBA(newJson[entry.id], index);
                case 'integerSelector':
                    return this.checkInt(newJson[entry.id], index);
                case 'percentageSelector':
                    return this.checkPercentage(newJson[entry.id], index);
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

    }

    private onJsonChange = (event: any, newJson?: string) => {
        if (newJson) {
            this.setState({ textValue: newJson });
            var newStyleOptions: WebChatStyleOption
            try {
                newStyleOptions = JSON.parse(newJson);
                this.validateJSON(newStyleOptions);
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
                    className={classes.MessageBar}
                    messageBarType={MessageBarType.error}
                    isMultiline={false}
                >
                    Invalid Json!
                </MessageBar>)
        }
    }

    private resetToDefault = (event: any) => {
        this.setState({ textValue: JSON.stringify(defaultStyleOptions, null, 4) });
        this.props.updateRootStateVariable('styleOptions', defaultStyleOptions);
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
                        >The following id's may have incorrect values. Please correct before proceeding
                            {newArr.map(error => (<li>{error}</li>))}
                        </MessageBar>
                        :
                        <> </>
                }
                <TextField onChange={(event: any, newValue?: string) => this.onJsonChange(event, newValue)} label="" multiline rows={40} value={this.state.textValue} />
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