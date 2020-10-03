import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { IAppState } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { Category } from "../../utilities/types";
import CSS from 'csstype';
import { Icon, mergeStyles } from "@fluentui/react";

const categoryHeaderContainer = mergeStyles(
    {   
        cursor: 'pointer',
        display: 'flex',
        aligntItems: 'center',
    }
);

interface CategoryLinkProps {
    name: string;
    activeCategory: Category;
    updateRootStateVariable: (stateVariableName: string, value: any) => void
}

export const CategoryLink = (props: CategoryLinkProps) => {
    const {updateRootStateVariable, name, activeCategory } = props;

    const getCategory = (stringName: string) : Category => {
        // finds corresponding category entry (as tuple) from Category enum 
        const categoryEntry: [string, Category] | undefined = Object.entries(Category).find(x => x[0] === stringName);

        const category: Category = categoryEntry![1];
        return category;
    };

    const displayName: Category = getCategory(name);
    const conditionalCategoryStyle: CSS.Properties = displayName === activeCategory
        ? {fontWeight: "bolder"} // if category is active
        : {};
    
    const categoryStyle: CSS.Properties = {
        display: 'flex',
        alignItems: 'center',
        ...conditionalCategoryStyle,
    };

    const conditionalIconStyle: CSS.Properties = displayName === activeCategory
        ? {}
        : {opacity: '0'};

    
    const iconStyle: CSS.Properties = {
        fontSize: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        ...conditionalIconStyle,
    };
    return (
        <div
            onClick={() => {updateRootStateVariable('activeCategory', displayName)}}
            className={categoryHeaderContainer}
        >
            <Icon style={iconStyle} iconName="ChevronRightSmall" />
            <span style={categoryStyle}>{displayName}</span>
        </div>
    );
};
