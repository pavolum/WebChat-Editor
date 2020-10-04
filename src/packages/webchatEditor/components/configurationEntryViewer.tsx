import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { CustomizationEntry, IAppState, WebChatStyleOption } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { Category } from "../../utilities/types";
import { CustomizationEntrySelector } from "./customizationEntrySelector";
import { CustomizationEntrySubCategory } from "./customizationEntrySubCategory";
import { mergeStyles } from "@fluentui/react";

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

interface ISubCategoryObject {
    [key: string]: CustomizationEntry[],
}

interface StateProps {
    activeCategory: Category;
    customizationEntries: CustomizationEntry[];
    styleOptions: WebChatStyleOption;
    displayColorModal: boolean;
    colorValue: string;
}

interface DispatchProps {
    updateStyleElement: (styleElementName: string, value: any) => void;
}

interface Props {
    updateRootStateVariable: (stateVariableName: string, value: any) => void,

}

type PropsType = StateProps & DispatchProps & Props;


export class ConfigurationEntryViewer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    createSubCategoriesObject = () : ISubCategoryObject => {
        const { customizationEntries, activeCategory } = this.props
        const subCategoryObject: ISubCategoryObject = {};
            
        customizationEntries.forEach((entry: CustomizationEntry) => {
            if (entry.category === activeCategory) {
                if (entry.subCategory) {
                    if (subCategoryObject[entry.subCategory]) {
                        subCategoryObject[entry.subCategory].push(entry);
                    } else {
                        subCategoryObject[entry.subCategory] = [entry];
                    }
                } else {
                    if (subCategoryObject.noSubCategory) {
                        subCategoryObject.noSubCategory.push(entry);
                    } else {
                        subCategoryObject.noSubCategory = [entry];
                    }
                }
            }
        });

        return subCategoryObject;
    }

    getStyleOptionValue = (key: any) => {
        const { styleOptions} = this.props;
        return this.prop(styleOptions, key);
    };

    prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    
    mapSubCategoriesObjectToReactElements = (subCategoryObject: ISubCategoryObject) => {
        const { styleOptions, updateStyleElement, updateRootStateVariable, colorValue, displayColorModal } = this.props;
        return (
            <div>
                {Object.keys(subCategoryObject).map((key) => {
                    if (key === "noSubCategory") {
                        return <div className={defaultEntriesContainer}>
                                    {subCategoryObject[key].map((entry: CustomizationEntry) => (
                                        <CustomizationEntrySelector
                                            entry={entry}
                                            value={this.getStyleOptionValue(entry.id)}
                                            onChange={updateStyleElement}
                                            updateRootStateVariable={updateRootStateVariable}
                                            displayColorModal={displayColorModal}
                                            colorValue={colorValue}
                                        />
                                    ))}
                                </div>
                    } else {
                        return <CustomizationEntrySubCategory
                                    entries={subCategoryObject[key]}
                                    subCategory={key}
                                    styleOptions={styleOptions}
                                    updateStyleElement={updateStyleElement}
                                    updateRootStateVariable={updateRootStateVariable}
                                    colorValue={colorValue}
                                    displayColorModal={displayColorModal}
                                />
                    }
                })}
            </div>
        );
    };

    render() {
        const { activeCategory } = this.props;
        const subCategoriesObject = this.createSubCategoriesObject();
        
        return (
            <Fragment>
                <h2>{activeCategory}</h2>
                <p>{`Start building your ${activeCategory}.`}</p>
                <div className={entryViewerContainer}>
                    {this.mapSubCategoriesObjectToReactElements(subCategoriesObject)}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state: IAppState, ownProps: Props): StateProps => ({
    activeCategory: state.activeCategory,
    customizationEntries: state.customizationEntries,
    styleOptions: state.styleOptions,
    colorValue: state.colorValue,
    displayColorModal: state.displayColorModal,
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