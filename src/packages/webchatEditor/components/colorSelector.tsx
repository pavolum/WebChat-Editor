import * as React from 'react';
import {
  ColorPicker,
  IColor,
  IColorPickerStyles,
} from 'office-ui-fabric-react/lib/index';
import { useBoolean } from '@uifabric/react-hooks';

import ColorSelectorModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Link, TextField } from '@fluentui/react';
import { CalloutModal } from './callOutModal';

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

interface ColorSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;
}

export const ColorSelector = (props: ColorSelectorProps) => {
  const { id, value, onChange,} = props;
  const [defaultColor] = React.useState(value ? value:'#f5f5f5');
  const [color, setColor] = React.useState(value ? value:'#ffffff');
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);

  const updateColor = React.useCallback((ev: any, colorObj: IColor) =>{
    onChange(id, colorObj.str);
    setColor(colorObj.str);
  }, [id, onChange]); 

  const resetToDefault = React.useCallback((defaultColor: string) =>{
    onChange(id, defaultColor);
    setColor(defaultColor);
  }, [id, onChange]); 

  const checkHex = (hexValue: string | undefined) => {
    if(hexValue?.match(/[^#abcdefABCDEF0-9]/g) === null){
    if(hexValue.length === 7 && hexValue[0] === '#'){
      setColor(hexValue);
    }
    if(hexValue[0] === '#' && hexValue.length > 7){
      return hexValue.slice(0,7);
    }
    return hexValue;
  }
  else {
    toggleIsCalloutVisible();
    return color;
  }
    
  }

  return (
    <div className={classNames.parent}>
      <ColorSelectorModal colorValue={color} >
        <ColorPicker
          color={color}
          onChange={updateColor}
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
      <CalloutModal id={id} isCalloutVisible={isCalloutVisible} toggleIsCalloutVisible={toggleIsCalloutVisible}>
          <TextField value={value} id={`${id}-call-out`} onChange={(e: any, newValue?: string) => {onChange(id, checkHex(newValue))}}/>
      </CalloutModal>
      </div>
      <Link isButton onClick={(e)=>resetToDefault(defaultColor)}>Reset to default.</Link>
      </div>
  );
};
