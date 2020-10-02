import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { CustomizationEntry, IAppState, WebChatStyleOption } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { Category, SubCategory } from "../../utilities/types";
import { CustomizationEntrySelector } from "./customizationEntrySelector";
import { CustomizationEntrySubCategory } from "./customizationEntrySubCategory";
import { mergeStyles } from "@fluentui/react";

const headerContianer = {};
const entryViewerContainer = mergeStyles(
    {   
        display: 'block',
        overflowY: 'auto',
        maxHeight: '86%',
    }
);

const defaultEntriesContainer = mergeStyles(
    {   
        marginBottom: '10px',
    }
);

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

    renderCurrentEntries = () => {
        const { customizationEntries, activeCategory, styleOptions, updateStyleElement } = this.props;
        const entriesBySubcategory: CustomizationEntry[][] = [];

        const pushToLastSubcategory = (entry: CustomizationEntry): void => {
            const lastIndex: number = entriesBySubcategory.length - 1;
            entriesBySubcategory[lastIndex].push(entry);
        }

        const pushToNewSubcategory = (entry: CustomizationEntry):void => {
            entriesBySubcategory.push([entry]);
        }

        customizationEntries.forEach((entry: CustomizationEntry, index: number) => {
            if (entry.category === activeCategory) {
                const lastIndex: number = entriesBySubcategory.length - 1;
                const lastGroup: CustomizationEntry[] | undefined = entriesBySubcategory[lastIndex];
                if (!lastGroup) {
                    pushToNewSubcategory(entry);
                } else {
                    const lastEntry: CustomizationEntry = lastGroup[lastGroup.length - 1];
                    if (lastEntry.subCategory === entry.subCategory) {
                        pushToLastSubcategory(entry);
                    } else {
                        pushToNewSubcategory(entry);
                    }
                }
            }
        });

        const getStyleOptionValue = (key: any) => {
            return prop(styleOptions, key);
        };

        function prop<T, K extends keyof T>(obj: T, key: K) {
            return obj[key];
        }

        const mapArrayWithNoSubcategory = (array: CustomizationEntry[]) => (
            <div className={defaultEntriesContainer}>
                {array.map((entry: CustomizationEntry) => (
                    <CustomizationEntrySelector
                        entry={entry}
                        value={getStyleOptionValue(entry.id)}
                        onChange={updateStyleElement}
                    />
                ))}
            </div>
        );

        const mapArrayWithSubcategory = (array: CustomizationEntry[]) => (
            <CustomizationEntrySubCategory
                    entries={array}
                    subCategory={array[0].subCategory!.toString()}
                    styleOptions={styleOptions}
                    updateStyleElement={updateStyleElement}
            />
        );
        
        return (
            <div>
                {entriesBySubcategory.map((subCategoryArray) => {
                    const testEntry = subCategoryArray[0];
                    if (testEntry.subCategory) {
                        return mapArrayWithSubcategory(subCategoryArray);
                    } else {
                        return mapArrayWithNoSubcategory(subCategoryArray);
                    }
                })}
            </div>
        );
    }

    render() {

        const { activeCategory } = this.props;
        
        return (
            <Fragment>
                <h2>{activeCategory}</h2>
                <p>{`Start building your ${activeCategory}.`}</p>
                <div className={entryViewerContainer}>
                    {this.renderCurrentEntries()}
                </div>
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