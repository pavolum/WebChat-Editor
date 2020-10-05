import * as React from 'react';
import {
  ColorPicker,
  getColorFromRGBA,
  IColor,
  IColorPickerStyles,
  IRGB,
  MaskedTextField,
} from 'office-ui-fabric-react/lib/index';
import ColorSelectorModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IColorPickerProps, Link, TextField } from '@fluentui/react';

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

const fullColorHex = (rgba: number[]) => {
  let colorObj: IRGB;
  console.log('rgba', rgba)
  if (rgba[0] | rgba[1] | rgba[2]) {
    colorObj = { r: rgba[0], g: rgba[1], b: rgba[2] }
  }
  else {
    colorObj = { r: 0, g: 0, b: 0 }
  }

  let iColorObj = getColorFromRGBA(colorObj);
  return iColorObj.str;
};

const parseRGBStringValues = (rgbaValue: string) => {
  let myString = rgbaValue.replace(/[rgba()]/g, '');
  let rgb = myString.split(',');
  return rgb; // returns string[] expected = ['255','255','255', '.02']
}

const parseRGBValues = (rgbaValue: string) => {
  let intValues: number[] = [];
  parseRGBStringValues(rgbaValue).forEach((stringValue) => {
    if (!isNaN(parseInt(stringValue))) //check for NaN when user deletes a r,g, or a values
    {
      intValues.push(parseInt(stringValue))
    }
    else { intValues.push(0); }
  })
  return intValues; //returns number[]
}

const formatHexToRgba = (r: number, g: number, b: number, a: number | undefined) => {
  return `rgba(${r},${g},${b},${a})`;
}

const initialValue = (rgbaValue: string) => {
  return (fullColorHex(parseRGBValues(rgbaValue ? rgbaValue : 'rgba(255,255,255, 1')));
  //Converts Rgba to HEX
}

const maskFormat = () => {

}

interface RgbaSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;
}

export const RgbaSelector = (props: RgbaSelectorProps) => {
  const { id, value, onChange, } = props;
  const [defaultColor] = React.useState(value);
  const [color, setColor] = React.useState(initialValue(value));

  const updateColor = React.useCallback((ev: any, colorObj: IColor) => {
    onChange(id, formatHexToRgba(colorObj.r, colorObj.g, colorObj.b, colorObj.a));
    setColor(colorObj.str);
  }, [id, onChange]);

  const resetToDefault = React.useCallback((defaultColor: string) => {
    onChange(id, defaultColor);
    setColor(initialValue(defaultColor));
  }, [id, onChange]);
  const [alphaType] = React.useState<IColorPickerProps['alphaType']>('alpha');

  const checkRGBA = (rgbaValue: string | undefined) => {
    if (rgbaValue) {
      let getRGB = parseRGBValues(rgbaValue);
      if (getRGB) {
        setColor(fullColorHex(getRGB));
      }
      getRGB = parseRGBValues(rgbaValue);
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
      <TextField value={value} onChange={(e: any, newValue?: string) => { onChange(id, checkRGBA(newValue)) }} />
      <MaskedTextField value={value}  onChange={(e: any, newValue?: string) => { onChange(id, checkRGBA(newValue)) }} />
      <Link onClick={() => resetToDefault(defaultColor)} isButton>Reset to default.</Link>

    </div>
  );
};
