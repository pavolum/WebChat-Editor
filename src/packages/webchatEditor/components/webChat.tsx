import React, { useMemo } from "react";
import { IAppState } from "../../Redux/reduxState";
import { connect } from "react-redux";
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';

////////////////// Styling //////////////////

let WebChatContainerClassName = mergeStyles(
    {
        height: '80vh',
        margin: '20px 25px'
    }
);

let WebChatPaneClassName = mergeStyles(
    {
        height: '92vh',
        background: '#D2D6D9',
        padding: '30px 20px'
    }
);

////////////////// WebChat //////////////////

interface StateProps {
    webChatStyleOptions: any;
}

interface DispatchProps {

}

interface Props {

}

type PropsType = StateProps & DispatchProps & Props;

export class WebChat extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        // TODO: add UseMemo functionality here for class component
        const directLine = createDirectLine({ token: '09QzhaLtLRc.C59btT8lvO2dI_HCyPvqElhIj5PVUudojAR_2PV9H1Y' });
        return (
            <div className={WebChatPaneClassName}>
                <div className={WebChatContainerClassName}>
                    <ReactWebChat styleOptions={this.props.webChatStyleOptions} directLine={directLine} userID="User" />
                </div>
            </div>
        );
    }
}

////////////////// Redux //////////////////

const mapStateToProps = (state: IAppState, ownProps: Props): StateProps => ({
    webChatStyleOptions: state.styleOptions
});

const dispatchToProps: DispatchProps = {

};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(WebChat);