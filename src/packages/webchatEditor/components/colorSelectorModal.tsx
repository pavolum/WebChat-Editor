import * as React from 'react';
import { useId, useBoolean } from '@uifabric/react-hooks';
import {
  Modal,
  getTheme,
  mergeStyleSets,
  FontWeights,
  IDragOptions,
  DefaultButton,
  Toggle,
  ContextualMenu,
  IconButton,
  IIconProps,
} from 'office-ui-fabric-react';
import { SwatchColorPicker } from '@fluentui/react';


const dragOptions: IDragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};
const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start',
    marginBottom: '200px',
  },
  header: [
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  currentColorStyles: {
    cursor: 'pointer',
    marginRight: '1rem',
    


  },
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },

  },
});
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
const cancelIcon: IIconProps = { iconName: 'Cancel' };
//props will a child of ColorSelectorModal

interface ColorSelectorModalProps {
  colorValue: string;
}
const ColorSelectorModal: React.FunctionComponent<ColorSelectorModalProps>  = (props ) => {
  
  const { colorValue} = props;

  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);

  const titleId = useId('title');

const colorCell = [
  { id: 'a', label: `Select to change.` , color: `${colorValue}`, maxWidth: '40px' },
];

  return (

    <div className={contentStyles.currentColorStyles}  onClick={showModal}>
        <SwatchColorPicker
           columnCount={1}
           cellHeight={30}
           cellWidth={30}
           cellShape={'square'}
           colorCells={colorCell}
           doNotContainWithinFocusZone
         />
          <Modal
            titleAriaId={titleId}
            isOpen={isModalOpen}
            onDismiss={hideModal}
            containerClassName={contentStyles.container}
            isDarkOverlay={false}
            dragOptions={isDraggable ? dragOptions : undefined}
          >
            <div className={contentStyles.header}>
              <span id={titleId}>Select a color.</span>
              <IconButton
                styles={iconButtonStyles}
                iconProps={cancelIcon}
                ariaLabel="Close popup modal"
                onClick={hideModal} />
            </div>
            <div className={contentStyles.body}>
              {props.children}
            </div>
          </Modal>
    </div>
    
  );
};

export default ColorSelectorModal;
