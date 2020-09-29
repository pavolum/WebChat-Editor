import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { IAppState } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { Category } from "../../utilities/types";
import CSS from 'csstype';

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
        : {marginLeft: '11px'};
    const conditionalIcon = () => {
        return displayName === activeCategory
            ?   <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.10274 5.50003L0.5 1.31213L1.19863 0.500031L5.5 5.50003L1.19863 10.5L0.5 9.68793L4.10274 5.50003Z"
                        fill="black"
                        stroke="black"
                        stroke-width="0.8"
                    />
                </svg>
            :   <Fragment/>;
    };

    return (
        <div
            onClick={() => {updateRootStateVariable('activeCategory', displayName)}}
        >
            <span>
                {conditionalIcon()}
            </span>
            <span style={conditionalCategoryStyle} >{`  ${displayName}`}</span>
        </div>
    );
}
