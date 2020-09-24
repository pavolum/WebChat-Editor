import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { CustomizationEntry, IAppState, WebChatStyleOption } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { Category } from "../../utilities/types";
import { CustomizationEntrySelector } from "./customizationEntrySelector";

interface StateProps {
    activeCategory: Category;
    customizationEntries: CustomizationEntry[];
    styleOptions: WebChatStyleOption;
}

interface DispatchProps {
    updateStyleElement: (styleElementName: string, value: any) => void;
}

interface Props {

}

type PropsType = StateProps & DispatchProps & Props;

export class ConfigurationEntryViewer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }
    // TODO: Loop through state.customizationEntries, pull entries whose category = state.activeCategory and add them to CustomizataionEntry[] entriesToRender;


    // Loop through `entriesToRender` and create an array of UI selector components where each UI selector corresponds to the entry.selectorType for the entry in question
    // Render UI Array
    renderCurrentEntries = () => {
        const { customizationEntries, activeCategory, styleOptions, updateStyleElement } = this.props;
        const currentEntries: CustomizationEntry[] = [];
        
        customizationEntries.forEach((entry: CustomizationEntry) => {
            if (entry.category === activeCategory) {
                currentEntries.push(entry);
            }
        });

        const getStyleOptionValue = (key: any) => {
            return prop(styleOptions, key);
        };

        function prop<T, K extends keyof T>(obj: T, key: K) {
            return obj[key];
        }
        
        return currentEntries.map((entry: CustomizationEntry) => (<CustomizationEntrySelector entry={entry} value={getStyleOptionValue(entry.id)} onChange = {updateStyleElement} />));
    }

    render() {

        const { activeCategory } = this.props;
        
        return (
            <Fragment>
                I will one day render the entries for category: {activeCategory}
                {this.renderCurrentEntries()}
            </Fragment>
        );
    }
}

const mapStateToProps = (state: IAppState, ownProps: Props): StateProps => ({
    activeCategory: state.activeCategory,
    customizationEntries: state.customizationEntries,
    styleOptions: state.styleOptions,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    updateStyleElement: (styleElementName: string, value: any) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_STYLE_ELEMENT, { styleElementName: styleElementName, value: value }));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigurationEntryViewer);