import React, { useState } from 'react';
import {
  ColorPicker,
  IColor,
  IColorPickerStyles,
} from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';
import { debounce } from 'underscore';


import ColorSelectorModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { TextField } from '@fluentui/react';

const classNames = mergeStyleSets({
  column: { marginTop: '16px' },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1rem',
    height: '100px',
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

const warningMessage = 'Hexadecimal colors must start with a "#" and can only contain 6 total alphanumeric values from [0-9] and [a-f]';

interface ColorSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;
}

const removeHash = (colorCode: string) => {
  if (colorCode && colorCode.length > 0 && colorCode[0] === '#') {
    return colorCode.slice(1);
  }
  return colorCode;
}

export const ColorSelector = (props: ColorSelectorProps) => {
  const { id, value, onChange } = props;
  const [textFieldValue, setTextFieldValue] = useState(removeHash(value));
  const [isErrorMessageOpen, { setTrue: showErrorMessage, setFalse: hideErrorMessage }] = useBoolean(false);

  const isValid = (newValue?: string): boolean => {
    if (newValue && (/^#([0-9A-F]{3}){1,2}$/i).test(`#${newValue}`)) {
      return true;
    }
    return false;
  }
  
  const colorFormOnChange = (newValue?: string) => {
    if (isValid(newValue)) {
      setTextFieldValue(newValue as string);
      onChange(id, `#${newValue}`);
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

  const updateColor = (colorObj: IColor) => { 
    onChange(id, colorObj.str);
    hideErrorMessage();
    setTextFieldValue(colorObj.hex);
    }

    const debounceUpdateColor = debounce(updateColor,150)


  return (
    <div className={classNames.parent}>
      <ColorSelectorModal colorValue={value} >
        <ColorPicker
          color={value}
          onChange={(e: any, color: IColor) => {
          debounceUpdateColor(color);
          }}
          showPreview
          styles={colorPickerStyles}
          strings={{
            alphaAriaLabel: 'Alpha slider: Use left and right arrow keys to change value, hold shift for a larger jump',
            transparencyAriaLabel: 'Transparency slider: Use left and right arrow keys to change value, hold shift for a larger jump',
            hueAriaLabel: 'Hue slider: Use left and right arrow keys to change value, hold shift for a larger jump',
          }}
          alphaSliderHidden />
      </ColorSelectorModal>

      <div className={classNames.column}>
        <TextField value={textFieldValue} errorMessage={isErrorMessageOpen ? warningMessage : ''} prefix='#' onChange={(e: any, newValue?: string) => { colorFormOnChange(newValue) }} />
      </div>
    </div>
  );
};
