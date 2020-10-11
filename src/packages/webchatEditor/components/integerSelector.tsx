import React, { Fragment } from "react";
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { mergeStyles } from "@fluentui/react";
import { debounce } from 'underscore';


interface IntegerSelectorProps {
    id: string;
    value: any;
    onChange: (styleElementName: string, value: any) => void;
}

const Ui_selector = mergeStyles(
    {
        width: '2em',
    }
);

export const IntegerSelector = (props: IntegerSelectorProps) => {
    const { id, value, onChange } = props;

    const debounceOnChange = debounce(onChange,500);

    const spinButtonIncrement = (val: string) => {
        debounceOnChange(id, parseInt(val) + 1);
        return String(+val + 1);
    };

    const spinButtonDecrement = (val: string) => {
        debounceOnChange(id, parseInt(val) - 1);
        return String(+val - 1);
    };

    const spinButtonValidate = (val: string) => {
        id !== 'bubbleFromUserNubOffset' ?  onChange(id, parseInt(val)) : onChange(id, 'bottom');
        return String(val);
    };

    return (
        <Fragment>
            <div className={Ui_selector}>
             <SpinButton
               defaultValue={value}
               step={1}
               onIncrement={spinButtonIncrement}
               onDecrement={spinButtonDecrement}
               onValidate={spinButtonValidate}
               incrementButtonAriaLabel={'Increase value by 1'}
               decrementButtonAriaLabel={'Decrease value by 1'}
             />     
            </div>  
        </Fragment>
       
    );
}
