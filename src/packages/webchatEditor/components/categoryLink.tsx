import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { IAppState } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { Category } from "../../utilities/types";

interface CategoryLinkProps {
    name: string;
    updateRootStateVariable: (stateVariableName: string, value: any) => void
}

export const CategoryLink = (props: CategoryLinkProps) => {
    const {updateRootStateVariable, name } = props;

    
    const getCategory = (stringName: string) : Category => {
        // finds corresponding category entry (as tuple) from Category enum 
        const categoryEntry: [string, Category] | undefined = Object.entries(Category).find(x => x[0] === stringName);

        const category: Category = categoryEntry![1];
        return category;
    };

    const displayName: Category = getCategory(name);
    
    return (
        <div onClick={() => {updateRootStateVariable('activeCategory', displayName)}}>
            {displayName}
        </div>
    );
}
