import * as React from 'react';
import {
  ColorPicker,
  IColor,
  IColorPickerStyles,
  IColorPickerProps,
} from 'office-ui-fabric-react/lib/index';
import RbgaSelectorInModal from './rbgaSelectorInModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { DefaultSelector } from './defaultSelector';

const classNames = mergeStyleSets({
  wrapper: { display: 'flex' },
  column2: { marginLeft: 10 },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',

  }
});

const colorPickerStyles: Partial<IColorPickerStyles> = {
  panel: { padding: 12 },
  root: {
    maxWidth: 352,
    minWidth: 352,
  },
  colorRectangle: { height: 268 },
};

interface RbgaSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;

}

export const RbgaSelector = (props: RbgaSelectorProps) => {
  const { id, value, onChange,} = props;
  const [color, setColor] = React.useState(value);
  const updateColor = React.useCallback((ev: any, colorObj: IColor) =>{
    onChange(id, colorObj.str);
    setColor( colorObj.str);
  }, [id, onChange]); 

  const [alphaType, setAlphaType] = React.useState<IColorPickerProps['alphaType']>('alpha');

  return (
    <div className={classNames.parent}>
      <RbgaSelectorInModal colorValue={color} >
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
      </RbgaSelectorInModal>
      <DefaultSelector id={id} onChange={onChange} value={value}/>
      </div>
  );
};
