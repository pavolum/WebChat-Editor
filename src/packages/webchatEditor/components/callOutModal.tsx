import React, { FunctionComponent } from 'react';

import { Callout, mergeStyleSets } from 'office-ui-fabric-react';
import { useId } from '@uifabric/react-hooks';

const styles = mergeStyleSets({
    textArea: {
      verticalAlign: 'top',
      display: 'inline-block',
      textAlign: 'left',
      minWidth: 130,
      height: 32,
    },
    callout: {
      maxWidth: 300,
    },
    header: {
      padding: '18px 24px 12px',
    },
  });
  
  interface CalloutModalProps {
    isCalloutVisible: Boolean;
    toggleIsCalloutVisible: ((ev?: any) => void) | undefined;
  }

  export const CalloutModal: FunctionComponent<CalloutModalProps>= (props) => {
    const labelId: string = useId('callout-label');
    const descriptionId: string = useId('callout-description');
    console.log(props.isCalloutVisible)
    return (
      <>
        {props.isCalloutVisible && (
          <Callout
            className={styles.callout}
            ariaLabelledBy={labelId}
            ariaDescribedBy={descriptionId}
            role="alertdialog"
            gapSpace={0}
            target="#json-editor-parent"
            onDismiss={props.toggleIsCalloutVisible}
            setInitialFocus
          >
            {props.children}
          </Callout>
        )}
      </>
    );
  };
