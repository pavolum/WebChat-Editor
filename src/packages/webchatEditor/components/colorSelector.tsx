import React, { useState, useCallback } from 'react';
import {
  ColorPicker,
  IColor,
  IColorPickerStyles,
} from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';

import ColorSelectorModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Link, TextField } from '@fluentui/react';

const classNames = mergeStyleSets({
  wrapper: { display: 'flex' },
  column: { marginRight: '1rem' },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  const [isErrorVisible, { toggle: toggleIsErrorVisible }] = useBoolean(false);
  // sus af
  const [textFieldValue, setTextFieldValue] = useState(removeHash(value));

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
      if (isErrorVisible) {
        toggleIsErrorVisible();
      }
    }
    else {
      if (newValue !== null && newValue !== undefined) {
        setTextFieldValue(newValue);
        if (!isErrorVisible) {
          toggleIsErrorVisible();
        }
      }
    }
  }

  return (
    <div className={classNames.parent}>
      <ColorSelectorModal colorValue={value} >
        <ColorPicker
          color={value}
          onChange={(e: any, color: IColor) => {
            onChange(id, color.str);
            setTextFieldValue(removeHash(color.str));
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
        <TextField value={textFieldValue} id={`${id}-call-out`} errorMessage={isErrorVisible ? warningMessage : ''} prefix='#' onChange={(e: any, newValue?: string) => { colorFormOnChange(newValue) }} />
      </div>
    </div>
  );
};
