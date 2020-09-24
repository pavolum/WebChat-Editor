import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { IAppState } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";

interface CategoryLinkProps {
    name: string;
    updateRootStateVariable: (stateVariableName: string, value: any) => void
}

export const CategoryLink = (props: CategoryLinkProps) => {
    const {updateRootStateVariable, name } = props;
    return (
        <div onClick={() => {updateRootStateVariable('activeCategory', name)}}>
            {name}
        </div>
    );
}