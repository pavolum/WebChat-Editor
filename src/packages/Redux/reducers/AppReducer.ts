import { IAppState, initialAppState, WebChatStyleOption } from "../reduxState";
import { GenericAction, actionTypes } from "../actions";

export function updateStyleElement(state: IAppState, styleElementName: string, value: boolean | string): IAppState {
  return {
    ...state,
    styleOptions: {
      ...state.styleOptions,
      [styleElementName]: value,
    }
  }
}

export function updateRootStateVariable(state: IAppState, stateVariableName: string, value: any): IAppState {
  return {
    ...state,
    [stateVariableName]: value,
  }
}

export function updateStyleOptions(state: IAppState, styleOptions: WebChatStyleOption): IAppState {
  return {
    ...state,
    styleOptions: styleOptions
  }
}

export const WebChatReducer = (state: IAppState = initialAppState, action: GenericAction<actionTypes, any>): IAppState => {
  switch (action.type) {
    case "UPDATE_STYLE_ELEMENT":
        return updateStyleElement(state, action.payload.styleElementName, action.payload.value);
        case "UPDATE_STYLE_OPTIONS":
        return updateStyleOptions(state, action.payload);
        case "UPDATE_ROOT_WEBCHAT_STATE_VARIABlE":
          return updateRootStateVariable(state, action.payload.propertyName, action.payload.value)
    default:
      return state;
  }
};
