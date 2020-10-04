import * as React from 'react';
import {
  ColorPicker,
  ChoiceGroup,
  IChoiceGroupOption,
  Toggle,
  getColorFromString,
  IColor,
  IColorPickerStyles,
  IColorPickerProps,
  updateA, values
} from 'office-ui-fabric-react/lib/index';
import ColorSelectorInModal from './colorSelectorInModal';

import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const alphaOptions: IChoiceGroupOption[] = [
  { key: 'alpha', text: 'Alpha' },
  { key: 'transparency', text: 'Transparency' },
  { key: 'none', text: 'None' },
];

const classNames = mergeStyleSets({
  wrapper: { display: 'flex' },
  column2: { marginLeft: 10 },
});

const colorPickerStyles: Partial<IColorPickerStyles> = {
  panel: { padding: 12 },
  root: {
    maxWidth: 352,
    minWidth: 352,
  },
  colorRectangle: { height: 268 },
};

interface ColorSelectorProps {
  id: string;
  value: any;
  onChange: (styleElementName: string, value: any) => void;
  updateRootStateVariable: (stateVariableName: string, value: any) => void;
  colorValue: string;
}

export const ColorSelector = (props: ColorSelectorProps) => {
  const { id, value, updateRootStateVariable, onChange, colorValue } = props;
  const [color, setColor] = React.useState(value);
  const updateColor = React.useCallback((ev: any, colorObj: IColor) =>
  setColor(colorObj.hex)
  , []); 


  return (
    <div className={classNames.wrapper}>
      <ColorSelectorInModal updateRootStateVariable={updateRootStateVariable}>
          <ColorPicker
            color={color}
            onChange={updateColor}
            showPreview
            styles={colorPickerStyles}
            // The ColorPicker provides default English strings for visible text.
            // If your app is localized, you MUST provide the `strings` prop with localized strings.
            strings={{
              // By default, the sliders will use the text field labels as their aria labels.
              // If you'd like to provide more detailed instructions, you can use these props.
              alphaAriaLabel: 'Alpha slider: Use left and right arrow keys to change value, hold shift for a larger jump',
              transparencyAriaLabel:
                'Transparency slider: Use left and right arrow keys to change value, hold shift for a larger jump',
              hueAriaLabel: 'Hue slider: Use left and right arrow keys to change value, hold shift for a larger jump',
            }}
            alphaSliderHidden
          />
      </ColorSelectorInModal>
    </div>
  );
};



