import React, { useState } from 'react';
import {
  ColorPicker,
  getColorFromRGBA,
  IColor,
  IColorPickerStyles,
} from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';
import { debounce } from 'underscore';
import ColorSelectorModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IColorPickerProps, TextField } from '@fluentui/react';

const classNames = mergeStyleSets({
  column: { marginTop: '16px' },
  parent: {
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1rem',
    
  }
});

const colorPickerStyles: Partial<IColorPickerStyles> = {
  panel: { padding: 12 },
  root: {
    maxWidth: 300,
    minWidth: 300,
  },
  colorRectangle: { height: 268 },
};

const fullColorHex = (rgba: number[]) => {
  return (getColorFromRGBA({r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3]})).str;
};

const parseRGBStringValues = (rgbaValue: string) => {
  return (rgbaValue.replace(/[rgba()]/g, '')).split(',');
}

const parseRGBValues = (rgbaValue: string) : number[] => { 
  return parseRGBStringValues(rgbaValue).map((stringValue) => {
        if (!isNaN(parseInt(stringValue))) { 
          return parseInt(stringValue);
        }
          else if(parseFloat(stringValue)){
            return (parseFloat(stringValue) * 100);
          }
            else { return 0; }; 
  })
}

const getHexColorFromRgba = (rgbaValue: string) => {
  return (fullColorHex(parseRGBValues(rgbaValue)));  // Converts Rgba to HEX
}

const warningMessage: string = 'Rgba values must contain only numeric values [0-9] which are separated by commas [ , ].'

interface RgbaSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;
}

export const RgbaSelector = (props: RgbaSelectorProps) => {
  const { id, value, onChange, } = props;
  const [textFieldValue, setTextFieldValue] = useState(value.replace(/[rgba()]/g, ''));
  const [isErrorMessageOpen, { setTrue: showErrorMessage, setFalse: hideErrorMessage }] = useBoolean(false);


  const updateColor = (colorObj: IColor) => { 
    hideErrorMessage();
    onChange(id,`rgba(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${colorObj.a})`);
    setTextFieldValue(`${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${colorObj.a}`);
    }
  
    const debounceUpdateColor = debounce(updateColor,150);

    const isValid = (newValue?: string): boolean => {
      if (newValue?.match(/[^. ,0-9]/g) === null && newValue?.match(/[,]/g)?.length===3) {
        const rgbaArray = parseRGBValues(newValue);
          const result = rgbaArray.reduce((acc, value)=>(
              acc && (value <= 255)), true)
          return result;
      }
      return false;
    }
  const [alphaType] = useState<IColorPickerProps['alphaType']>('alpha');

  const colorFormOnChange = (newValue?: string) => {
    if (isValid(newValue)) {
      setTextFieldValue(newValue as string);
      onChange(id, `rgba(${newValue})`)
      if (isErrorMessageOpen) {
        hideErrorMessage();
      }
    }
    else {
      if (newValue !== null && newValue !== undefined) {
        setTextFieldValue(newValue);
        if (!isErrorMessageOpen) {
          showErrorMessage();
        }
      }
    }
  }

  return (
    <div className={classNames.parent}>
      <ColorSelectorModal colorValue={getHexColorFromRgba(value)}>
        <ColorPicker
          color={getHexColorFromRgba(value)}
          onChange={(e: any, color: IColor) => {
          debounceUpdateColor(color);
          }}
          showPreview
          alphaType={alphaType}
          styles={colorPickerStyles}
          strings={{
            alphaAriaLabel: 'Alpha slider: Use left and right arrow keys to change value, hold shift for a larger jump',
            transparencyAriaLabel: 'Transparency slider: Use left and right arrow keys to change value, hold shift for a larger jump',
            hueAriaLabel: 'Hue slider: Use left and right arrow keys to change value, hold shift for a larger jump',
          }}
        />
      </ColorSelectorModal>
      <div className={classNames.column}>
        <TextField errorMessage={isErrorMessageOpen ? warningMessage : ''} value={textFieldValue} onChange={(e: any, newValue?: string) => {colorFormOnChange(newValue)}} prefix={'rgba('} suffix={')'} />
      </div>
    </div>
  );
};
