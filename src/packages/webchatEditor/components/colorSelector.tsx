import * as React from 'react';
import {
  ColorPicker,
  IColor,
  IColorPickerStyles,
} from 'office-ui-fabric-react/lib/index';
import ColorSelectorInModal from './colorSelectorModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { DefaultSelector } from './defaultSelector';
import { Link } from '@fluentui/react';

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
  const [defaultColor, setDefaultColor] = React.useState(value ? value:'#f5f5f5');
  const [color, setColor] = React.useState(value ? value:'#f5f5f5');
  const updateColor = React.useCallback((ev: any, colorObj: IColor) =>{
    onChange(id, '#' + colorObj.hex);
    setColor('#' + colorObj.hex);
  }, [id, onChange]); 

  const resetToDefault = React.useCallback((defaultColor: string) =>{
    onChange(id, defaultColor);
    setColor(defaultColor);
  }, [id, onChange]); 

  return (
    <div className={classNames.parent}>
      <ColorSelectorInModal colorValue={color} >
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
      </ColorSelectorInModal>
      <div className={classNames.column}>
          <DefaultSelector id={id} onChange={onChange} value={value}/>
      </div>
      <Link isButton onClick={(e)=>resetToDefault(defaultColor)}>Reset to default.</Link>
      </div>
  );
};
