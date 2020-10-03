import React, { Fragment } from "react";
import { merge, mergeStyles } from "@fluentui/react";
import { Slider } from 'office-ui-fabric-react/lib/Slider';

interface percentageSelectorProps {
    id: string;
    value: any;
    onChange: (styleElementName: string, value: any) => void;
}

const Ui_selector = mergeStyles(
    {
        width: '50%',
    }
);
export const PercentageSelector = (props: percentageSelectorProps) => {
    const { id, value, onChange } = props;
 
    const sliderOnChange = (sliderValue: number) => (onChange(id, `${sliderValue}%`));
    const sliderValueFormat = (value: number) => `${value}%`;

    return (
        <Fragment>
            <div className={Ui_selector}>
            <Slider
                min={0}
                max={100}
                step={1}
                defaultValue={parseInt(value)}
                onChange={(sliderOnChange)}
                valueFormat={sliderValueFormat}
                showValue
                originFromZero
            />
            </div>
        </Fragment>
    );
}
