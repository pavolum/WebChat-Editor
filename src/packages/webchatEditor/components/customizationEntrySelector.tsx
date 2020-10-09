import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { CustomizationEntry, IAppState, WebChatStyleOption } from "../../Redux/reduxState";
import { genericSingleAction, actionTypes } from "../../Redux/actions";
import { UISelectorType } from "../../utilities/types";
import { DefaultSelector } from "./defaultSelector";
import { BooleanSelector } from "./booleanSelector";
import { IntegerSelector } from "./integerSelector";
import { PercentageSelector } from "./percentageSelector";

import { mergeStyles } from "@fluentui/react";

const UI_selector = mergeStyles(
    {   
        fontSize: '1rem',
        fontWeight: '400',
    }
);

interface CustomizationEntrySelectorProps {
    entry: CustomizationEntry;
    value: any;
    onChange: (styleElementName: string, value: any) => void;
}

export const CustomizationEntrySelector = (props: CustomizationEntrySelectorProps) => {
    const { entry, value, onChange } = props;
    const { displayName, id } = entry;

    const renderSelector = (type: UISelectorType) => {
        switch (type) {
            case UISelectorType.booleanSelector:
                return <BooleanSelector id={id} onChange={onChange} value={value}/>
            case UISelectorType.integerSelector:
                return <IntegerSelector id={id} onChange={onChange} value={value}/>
                case UISelectorType.percentageSelector:
                    return <PercentageSelector id={id} onChange={onChange} value={value}/>
            case UISelectorType.defaultSelector:
            default:
                return <DefaultSelector id={id} onChange={onChange} value={value}/> 
        }
    }

    return (
        <div className={UI_selector}>
            {displayName}
            {renderSelector(entry.uiSelectorType)}
        </div>
    );
}
