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
import { Icon } from '@fluentui/react/lib/Icon';

import {ColorSelector} from './colorSelector';

interface ColorSelectorInModalProps {
  updateRootStateVariable: (stateVariableName: string, value: any) => void;
  displayColorModal: boolean;
  colorValue: string;
}

const dragOptions: IDragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};
const cancelIcon: IIconProps = { iconName: 'Cancel' };
//props will a child of ColorSelectorInModal
const ColorSelectorInModal: React.FunctionComponent<ColorSelectorInModalProps>  = (props ) => {
  
  const {updateRootStateVariable, colorValue, displayColorModal} = props;
  console.log('displayColorModal: ', displayColorModal)

  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(displayColorModal);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  updateRootStateVariable('displayColorModal', isModalOpen)

  console.log('displayColorModal: ', displayColorModal)
  // Use useId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings and manually ensure uniqueness.)
  const titleId = useId('title');
  const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    width: 'auto',
    hieght: '100%',
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
    backgroundColor: `${colorValue}`,
    width: '24px',
    height: '24px',
    cursor: 'pointer',
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
const toggleStyles = { root: { marginBottom: '20px' } };
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

  return (
    
    <div className={contentStyles.currentColorStyles} onClick={showModal} >
      <Modal
        titleAriaId={titleId}
        isOpen={displayColorModal}
        onDismiss={hideModal}
        isModeless={true}
        containerClassName={contentStyles.container}
        dragOptions={isDraggable ? dragOptions : undefined}
        isBlocking
      >
        <div className={contentStyles.header}>
          <span id={titleId}>Lorem Ipsum</span>
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


export default ColorSelectorInModal;
