import React from "react";
import { withRouter } from "react-router-dom";
import { IAppState } from "../../Redux/reduxState";
import { connect } from "react-redux";
import WebChat from "./webChat";
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { actionTypes, genericSingleAction } from "../../Redux/actions";
import { Dispatch, AnyAction } from 'redux';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { CollapsibleHeader } from "./collapsibleHeader";
import { ColorForm } from "./colorForm";
import { FontForm } from "./fontForm";
import { AvatarForm } from "./avatarForm";
import { MiscForm } from "./miscForm";
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import WebChatJsonEditor from "./webChatJsonEditor";
import { Category } from "../../utilities/types";
import { CategoryLink } from "./categoryLink";
import ConfigurationEntryViewer from "./configurationEntryViewer";

////////////////// Styling //////////////////
// let leftGridClassName = mergeStyles(
//     {
//         width: '66% !important',
//         height: '86vh',
//         overflowY: 'scroll',
//         marginTop: '20px'
//     }
// );

// let rightGridClassName = mergeStyles(
//     {
//         width: '34% !important',
//         paddingRight: '0px !important',
//         paddingLeft: '0px !important',
//         height: '100%'
//     }
// );

const stackTokens = { childrenGap: 10 };


////////////////// WebChatEditor //////////////////

interface StateProps {

}

interface DispatchProps {
    updateStyleElement: (styleElementName: string, value: any) => void,
    updateRootStateVariable: (stateVariableName: string, value: any) => void
}

interface Props {

}

type PropsType = StateProps & DispatchProps & Props;

export class WebChatEditor extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }


    private RenderCategories = () => {
        let resultingUIComponents = [];
        for (let category in Category) {
            resultingUIComponents.push(<CategoryLink name={category} updateRootStateVariable={this.props.updateRootStateVariable}/>)
        }
        return resultingUIComponents;
    }

    render() {

        /* TODO: Pseudocode
            
            Loop through state.customizationEntries
            For each entry

        */
        return (

            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className={"ms-Grid-col ms-sm4 ms-md4 ms-lg4 " } >
                        <Stack tokens={stackTokens}>
                                    <h4>Customize Your WebChat UI:</h4>
                                    <p>Available Categories:</p>
                                {this.RenderCategories()}
                        </Stack>
                    </div>
                    <div className={"ms-Grid-col ms-sm4 ms-md4 ms-lg4 " } >
                        <ConfigurationEntryViewer />
                    </ div>
                    <div className={"ms-Grid-col ms-sm4 ms-md4 ms-lg4 "     } >
                        <WebChat />
                    </div>
                </div>
            </div>
        );
    }
}

////////////////// Redux //////////////////

const mapStateToProps = (state: IAppState, ownProps: Props): StateProps => ({

});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    updateStyleElement: (styleElementName: string, value: any) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_STYLE_ELEMENT, { styleElementName: styleElementName, value: value }));
    },
    updateRootStateVariable: (stateVariableName: string, value: any) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_ROOT_WEBCHAT_STATE_VARIABlE, {propertyName: stateVariableName, value: value}));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WebChatEditor);