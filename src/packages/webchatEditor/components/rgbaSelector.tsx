import React, { useCallback, useState } from 'react';
import {
  ColorPicker,
  getColorFromRGBA,
  IColor,
  IColorPickerStyles,
} from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';

import ColorSelectorModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IColorPickerProps, Link, TextField } from '@fluentui/react';
import { CalloutModal } from './callOutModal';

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
// return (getColorFromRGBA({r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3]})).str; 


const fullColorHex = (rgba: number[]) => {
  return (getColorFromRGBA({r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3]})).str;
};

const parseRGBStringValues = (rgbaValue: string) => {
  return (rgbaValue.replace(/[rgba()]/g, '')).split(',');  // returns string[] expected = ['255','255','255', '.02']
}

const parseRGBValues = (rgbaValue: string) => { // removes non valid chars, then parses int from string values while mapping rgba array
  return parseRGBStringValues(rgbaValue).map((stringValue) => {
        if (!isNaN(parseInt(stringValue))) { // spaces will return NaN
          return parseInt(stringValue);
        }
          else if(parseFloat(stringValue)){
            return parseFloat(stringValue) * 100;
          }
            else { return 0; }; // will fill in empty spaces with 0
  })
}

const formatHexToRgba = (r: number, g: number, b: number, a: number | undefined) => {
  return `rgba(${r},${g},${b},${a})`;
}

const initialValue = (rgbaValue: string) => {
  return (fullColorHex(parseRGBValues(rgbaValue ? rgbaValue : 'rgba(0,0,0, 1')));  // Converts Rgba to HEX

}
const warningMessage: string = 'Rgba values must contain only numeric values [0-9] which are separated by commas [ , ].'

interface RgbaSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;
}

export const RgbaSelector = (props: RgbaSelectorProps) => {
  const { id, value, onChange, } = props;
  const [color, setColor] = useState(initialValue(value));
  const [defaultColor] = useState(value)
  let textFieldValue = value ? value.replace(/[rgba]/g, '') : '(0,0,0,1)'; // sets textFieldValue to (0,0,0,1) if value is undefined
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false); // used to initiate warning callout

  const updateColor = useCallback((ev: any, colorObj: IColor) => { // IColor holds r,g,b,a, and hex values
    onChange(id, formatHexToRgba(colorObj.r, colorObj.g, colorObj.b, colorObj.a));
    setColor(colorObj.str);
    }, [id, onChange]);

  const resetToDefault = () => {
    onChange(id, defaultColor);
    setColor(initialValue(defaultColor));
    };

  const [alphaType] = useState<IColorPickerProps['alphaType']>('alpha');

  const checkRGBA = (rgbaValue: string | undefined) => {
    if (rgbaValue?.match(/[^( ).,0-9]/g) === null && rgbaValue?.match(/,/g)?.length===3) { // ensures users do not delete commas and provide valid values
      let getRGB = parseRGBValues(rgbaValue);
      if (getRGB) {
        onChange(id, formatHexToRgba(getRGB[0], getRGB[1], getRGB[2], getRGB[3]))
        setColor(fullColorHex(getRGB));
      }
    }
    else {
      toggleIsCalloutVisible();
      setColor(color)
      return value;
    }
    return rgbaValue;
  }

  return (
    <div className={classNames.parent}>
      <ColorSelectorModal colorValue={color}>
        <ColorPicker
          color={color}
          onChange={updateColor}
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
      <CalloutModal warningMessage={warningMessage} id={id} isCalloutVisible={isCalloutVisible} toggleIsCalloutVisible={toggleIsCalloutVisible}>
        <TextField id={`${id}-call-out`} value={textFieldValue} onChange={(e: any, newValue?: string) => { onChange(id, checkRGBA(newValue)) }} prefix={'rgba'} />
      </CalloutModal>
      </div>
      <Link onClick={() => resetToDefault()} isButton>Reset to default.</Link>
    </div>
  );
};
