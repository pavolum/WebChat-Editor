import * as React from 'react';
import {
  ColorPicker,
  getColorFromRGBA,
  IColor,
  IColorPickerStyles,
  IRGB,
} from 'office-ui-fabric-react/lib/index';
import ColorSelectorModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { DefaultSelector } from './defaultSelector';
import { getColorFromString, IColorPickerProps, Link } from '@fluentui/react';

const classNames = mergeStyleSets({
  wrapper: { display: 'flex' },
  column: { marginRight: '1rem'},
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


const fullColorHex = (rbga: number[]) => {  
  let colorObj: IRGB;
  if(rbga[0]){
     colorObj = { r: rbga[0], g: rbga[1], b: rbga[2] }
  }
  else 
  {
     colorObj = { r: 0, g: 0, b: 0 }
  }
let iColorObj = getColorFromRGBA(colorObj);
return iColorObj.hex;
};

const parseRBGStringValues=(rbgaValue: string)=> {
  let myString = rbgaValue.replace(/[rbga()]/g,'');
  let rbg = myString.split(',');
  return rbg; // returns string[]
}

const parseRBGValues=(rbgaValue: string)=> {
  let intValues: number[] = [];
  parseRBGStringValues(rbgaValue).forEach((stringValue)=>{
    intValues.push(parseInt(stringValue))
  })
  return intValues; //returns number[]
}

const formatHexToRgba = (r: number, g: number, b: number, a: number | undefined) => {
return `rgba(${r},${g},${b},${a})`;
}

const initialValue = (rbgaValue : string) => {
    return ('#' + fullColorHex(parseRBGValues(rbgaValue !== undefined ? rbgaValue:'rgba(255,255,255, 1')));
    //Converts RGBA to HEX
  }

interface RbgaSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;
}

export const RbgaSelector = (props: RbgaSelectorProps) => {
  const { id, value, onChange,} = props;
  const [defaultColor, setDefaultColor] = React.useState(value);
  const [color, setColor] = React.useState(initialValue(value));
 
  const updateColor = React.useCallback((ev: any, colorObj: IColor) =>{
    onChange(id, formatHexToRgba(colorObj.r, colorObj.g, colorObj.b, colorObj.a));
    setColor( colorObj.str);
  }, [id, onChange]); 

  const resetToDefault = React.useCallback((defaultColor: string) =>{
    onChange(id, defaultColor);
    setColor(initialValue(defaultColor));
  }, [id, onChange]); 
  const [alphaType, setAlphaType] = React.useState<IColorPickerProps['alphaType']>('alpha');

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
      <DefaultSelector id={id} onChange={onChange} value={value}/>
      <Link isButton onClick={()=>resetToDefault(defaultColor)}>Reset to default.</Link>

      </div>
  );
};
