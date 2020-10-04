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


interface RbgaSelectorInModalProps {
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
const RbgaSelectorInModal: React.FunctionComponent<RbgaSelectorInModalProps>  = (props ) => {
  
  const {updateRootStateVariable, colorValue, displayColorModal} = props;

  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(displayColorModal);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);

  const titleId = useId('title');
  const theme = getTheme();
const contentStyles = mergeStyleSets({
  parent: {
    
  },
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    width: 'auto',
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
    border: 'solid',
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
    <div className={contentStyles.parent}>
    <div className={contentStyles.currentColorStyles} onClick={showModal} >
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
    </div>

  );
};


export default RbgaSelectorInModal;
