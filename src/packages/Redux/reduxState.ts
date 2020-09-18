import { defaultStyleOptions } from "../webchatEditor/constants"

export interface CustomizationEntry {
    id: string,
    displayName: string,
    category: any, // TODO change to category interface
    isAdvancedEntry: boolean,
    uiSelectorType: any // TODO create uiSelectorType interface 
}

export interface IAppState {
    // Value of UI elements that determine style option value stored here
    customizationEntries: CustomizationEntry[],
    // Value of current style options stored here
    styleOptions: WebChatStyleOption;
    jsonIsInvalid: boolean;
}

// TODO: Figure out way to get strongly types style Options obj that maps to https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js
export interface WebChatStyleOption {
    accent: string;
    backgroundColor: string;
    cardEmphasisBackgroundColor: string;
    paddingRegular: number;
    paddingWide: number;
    subtle: string;
    messageActivityWordBreak: string;
    fontSizeSmall: string;
    monospaceFont: string;
    primaryFont: string;
    avatarBorderRadius: string;
    avatarSize: number;
    botAvatarImage: string;
    botAvatarInitials: string;
    userAvatarImage: string;
    userAvatarInitials: string;
    bubbleBackground: string;
    bubbleBorderColor: string;
    bubbleBorderRadius: number;
    bubbleBorderStyle: string;
    bubbleBorderWidth: number;
    bubbleFromUserBackground: string;
    bubbleFromUserBorderColor: string;
    bubbleFromUserBorderRadius: number;
    bubbleFromUserBorderStyle: string;
    bubbleFromUserBorderWidth: number;
    bubbleFromUserNubOffset: string;
    bubbleFromUserNubSize: number;
    bubbleFromUserTextColor: string;
    bubbleImageHeight: number;
    bubbleMaxWidth: number;
    bubbleMinHeight: number;
    bubbleMinWidth: number;
    bubbleNubOffset: string;
    bubbleNubSize: number;
    bubbleTextColor: string;
    markdownRespectCRLF: boolean;
    richCardWrapTitle: boolean;
    rootHeight: string;
    rootWidth: string;
    rootZIndex: number;
    hideScrollToEndButton: boolean;
    hideSendBox: boolean;
    hideUploadButton: boolean;
    microphoneButtonColorOnDictate: string;
    sendBoxBackground: string;
    sendBoxButtonColorOnDisabled: string;
    sendBoxButtonColorOnFocus: string;
    sendBoxButtonColorOnHover: string;
    sendBoxHeight: number;
    sendBoxMaxHeight: number;
    sendBoxTextColor: string;
    sendBoxBorderBottom: string;
    sendBoxBorderLeft: string;
    sendBoxBorderRight: string;
    sendBoxBorderTop: string;
    sendBoxTextWrap: boolean;
    showSpokenText: boolean;
    suggestedActionBackground: string;
    suggestedActionBorderRadius: number;
    suggestedActionBorderStyle: string;
    suggestedActionBorderWidth: number;
    suggestedActionDisabledBorder?: null;
    suggestedActionDisabledBorderColor: string;
    suggestedActionDisabledBorderStyle: string;
    suggestedActionDisabledBorderWidth: number;
    suggestedActionHeight: number;
    suggestedActionImageHeight: number;
    suggestedActionLayout: string;
    suggestedActionTextColor?: null;
    suggestedActionsStackedOverflow?: null;
    groupTimestamp: boolean;
    sendTimeout: number;
    sendTimeoutForAttachments: number;
    timestampFormat: string;
    newMessagesButtonFontSize: string;
    transcriptOverlayButtonBackground: string;
    transcriptOverlayButtonBackgroundOnFocus: string;
    transcriptOverlayButtonBackgroundOnHover: string;
    transcriptOverlayButtonColor: string;
    videoHeight: number;
    connectivityIconPadding: number;
    connectivityMarginLeftRight: number;
    connectivityMarginTopBottom: number;
    connectivityTextSize: string;
    failedConnectivity: string;
    slowConnectivity: string;
    notificationText: string;
    slowConnectionAfter: number;
    typingAnimationBackgroundImage?: null;
    typingAnimationDuration: number;
    typingAnimationHeight: number;
    typingAnimationWidth: number;
    spinnerAnimationBackgroundImage?: null;
    spinnerAnimationHeight: number;
    spinnerAnimationWidth: number;
    spinnerAnimationPadding: number;
    enableUploadThumbnail: boolean;
    uploadThumbnailContentType: string;
    uploadThumbnailHeight: number;
    uploadThumbnailQuality: number;
    uploadThumbnailWidth: number;
    notificationDebounceTimeout: number;
    hideToaster: boolean;
    toasterHeight: number;
    toasterMaxHeight: number;
    toasterSingularMaxHeight: number;
    toastFontSize: string;
    toastIconWidth: number;
    toastSeparatorColor: string;
    toastTextPadding: number;
    toastErrorBackgroundColor: string;
    toastErrorColor: string;
    toastInfoBackgroundColor: string;
    toastInfoColor: string;
    toastSuccessBackgroundColor: string;
    toastSuccessColor: string;
    toastWarnBackgroundColor: string;
    toastWarnColor: string;
  }


export const initialAppState: IAppState = {
    customizationEntries: [], // TODO: populate with real data
    styleOptions: defaultStyleOptions,
    jsonIsInvalid: false
}