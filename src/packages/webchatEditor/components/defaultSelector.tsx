import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { CustomizationEntry, IAppState, WebChatStyleOption } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { UISelectorType } from "../../utilities/types";
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';



interface DefaultSelectorProps {
    id: string;
    value: any;
    onChange: (styleElementName: string, value: any) => void;
}

export const DefaultSelector = (props: DefaultSelectorProps) => {
    const { id, value, onChange } = props;

    return (
        <Fragment>
            <TextField value={value} onChange={(e: any, newValue?: string) => {onChange(id, newValue)}} autoAdjustHeight/>
        </Fragment>
    );
}