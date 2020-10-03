import React, { Fragment } from "react";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

interface BooleanSelectorProps {
    id: string;
    value: any;
    onChange: (styleElementName: string, value: any) => void;
}
export const BooleanSelector = (props: BooleanSelectorProps) => {
    const { id, value, onChange } = props;
    return (
        <Fragment>
      <Checkbox value={value} onChange={(e: any, newValue?: boolean) => {onChange(id, newValue)}}/>
        </Fragment>
    );
}
