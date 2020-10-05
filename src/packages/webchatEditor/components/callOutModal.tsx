import * as React from 'react';
import { DefaultButton, Callout, mergeStyleSets } from 'office-ui-fabric-react';
import { useBoolean, useId } from '@uifabric/react-hooks';

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
    id: string;
    isCalloutVisible: boolean;
    toggleIsCalloutVisible: ((ev?: any) => void) | undefined;
  }

  export const CalloutModal: React.FunctionComponent<CalloutModalProps>= (props) => {
    const labelId: string = useId('callout-label');
    const descriptionId: string = useId('callout-description');
    return (
      <>
        <div className={styles.textArea}>
        {props.children}
        </div>
        {props.isCalloutVisible && (
          <Callout
            className={styles.callout}
            ariaLabelledBy={labelId}
            ariaDescribedBy={descriptionId}
            role="alertdialog"
            gapSpace={0}
            target={`#${props.id}-call-out`}
            onDismiss={props.toggleIsCalloutVisible}
            setInitialFocus
          >
            <div className={styles.header}>
      Hexadecimal colors can only contain 6 total alphanumeric values from [0-9] and [a-f].
            </div>
          </Callout>
        )}
      </>
    );
  };