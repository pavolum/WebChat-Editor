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
import { hiddenContentStyle } from "@fluentui/react";

////////////////// Styling //////////////////
// cosnt leftGridClassName = mergeStyles(
//     {
//         width: '66% !important',
//         height: '86vh',
//         overflowY: 'scroll',
//         marginTop: '20px'
//     }
// );

// const rightGridClassName = mergeStyles(
//     {
//         width: '34% !important',
//         paddingRight: '0px !important',
//         paddingLeft: '0px !important',
//         height: '100%'
//     }
// );

const headerContainer = mergeStyles(
    {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #000000',
        height: '80px',
        paddingLeft: '40px',
        // backgroundColor: 'lightPink',
    }
);


const pivotHeader = mergeStyles(
    {
        marginTop: '15px'
    }
);

const editorContainer = mergeStyles(
    {
        padding: '33px',
        border: '1px solid #000000',
        // backgroundColor: 'lightGreen',
    }
);

const configurationEntriesContainer = mergeStyles(
    {
        height: '82vh',
        // backgroundColor: 'purple !important',
        overflowY: 'hidden',
    }
);

const stackTokens = { childrenGap: 10 };


////////////////// WebChatEditor //////////////////

interface StateProps {
    activeCategory: Category;
}

interface DispatchProps {
    updateStyleElement: (styleElementName: string, value: any) => void,
    updateRootStateVariable: (stateVariableName: string, value: any) => void,
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

        const { activeCategory } = this.props;

        for (let category in Category) {
            resultingUIComponents.push(
                <CategoryLink
                    name={category}
                    activeCategory={activeCategory}
                    updateRootStateVariable={this.props.updateRootStateVariable}
                />
            );
        }

        return resultingUIComponents;
    }

    render() {
        return (
            <div className="ms-Grid" dir="ltr">
                <div className={`ms-Grid-row ${headerContainer}`}>
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">Customize Your Webchat UI</div>
                </div>

                <div className={`ms-Grid-row ${editorContainer}`}>
                    <div className="ms-Grid-col ms-sm8 ms-md8 ms-lg8">
                        <Pivot aria-label="Large Link Size Pivot Example">
                            <PivotItem className={pivotHeader} headerText="GUI">
                                <div>
                                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                                        <Stack tokens={stackTokens}>
                                            {this.RenderCategories()}
                                        </Stack>
                                    </div>
                                    <div className={`ms-Grid-col ms-sm8 ms-md8 ms-lg8 ${configurationEntriesContainer}`}>
                                        <ConfigurationEntryViewer updateRootStateVariable={this.props.updateRootStateVariable} />
                                    </ div>
                                </div>
                            </PivotItem>
                            <PivotItem headerText="Json Editor">
                                <WebChatJsonEditor />
                            </PivotItem>
                        </Pivot>
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <WebChat />
                    </div>
                </div>
            </div>
        );
    }
}

////////////////// Redux //////////////////

const mapStateToProps = (state: IAppState, ownProps: Props): StateProps => ({
    activeCategory: state.activeCategory,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    updateStyleElement: (styleElementName: string, value: any) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_STYLE_ELEMENT, { styleElementName: styleElementName, value: value }));
    },
    updateRootStateVariable: (stateVariableName: string, value: any) => {
        dispatch(genericSingleAction<any>(actionTypes.UPDATE_ROOT_WEBCHAT_STATE_VARIABlE, { propertyName: stateVariableName, value: value }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WebChatEditor);