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
    // TODO: Loop through state.customizationEntries, pull entries whose category = state.activeCategory and add them to CustomizataionEntry[] entriesToRender;


    // Loop through `entriesToRender` and create an array of UI selector components where each UI selector corresponds to the entry.selectorType for the entry in question
    // Render UI Array
    renderCurrentEntries = () => {
        const { customizationEntries, activeCategory, styleOptions, updateStyleElement } = this.props;
        const defaultEntries: CustomizationEntry[] = [];
        
        type subCategoryEntryObject = {
            [key: string]: CustomizationEntry[];
        };
        const subCategoryEntries: subCategoryEntryObject = {};
        
        customizationEntries.forEach((entry: CustomizationEntry) => {
            const { subCategory } = entry;
            if (entry.category === activeCategory) {
                if (!subCategory) {
                    defaultEntries.push(entry);
                } else {
                    const subAsString = subCategory.toString();
                    if (subCategoryEntries[subAsString]) {
                        subCategoryEntries[subAsString].push(entry);
                    } else {
                        subCategoryEntries[subAsString] = [entry];
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
        
        
        return (
            <div>
                <div className={defaultEntriesContainer}>
                    {defaultEntries.map((entry: CustomizationEntry) => (
                        <CustomizationEntrySelector
                            entry={entry}
                            value={getStyleOptionValue(entry.id)}
                            onChange={updateStyleElement}
                        />
                ))}
                </div>
                <div>
                    {Object.keys(subCategoryEntries).map(
                        (subCategory) => (
                            <CustomizationEntrySubCategory
                                entries={subCategoryEntries[subCategory]}
                                subCategory={subCategory}
                                styleOptions={styleOptions}
                                updateStyleElement={updateStyleElement}
                            />
                        )
                    )}
                </div>
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