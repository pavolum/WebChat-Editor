function fontFamily(fonts: any) {
    return fonts.map((font: any) => `'${font}'`).join(', ');
  }
  
  const DEFAULT_ACCENT = '#0063B1';
  const DEFAULT_SUBTLE = '#767676'; // With contrast 4.5:1 to #ffffff
  const PADDING_REGULAR = 10;
  const DEFAULT_UNDEFINED_COLOR = '#000000';
  const DEFAULT_UNDEFINED_RGBA = 'rgba(255,255,255, 50)';
  
export const defaultStyleOptions = {
    // Color and paddings
    accent: DEFAULT_ACCENT,
    backgroundColor: '#ffffff',
    cardEmphasisBackgroundColor: '#F0F0F0',
    paddingRegular: PADDING_REGULAR,
    paddingWide: PADDING_REGULAR * 2,
    subtle: DEFAULT_SUBTLE,
  
    // Word break
    messageActivityWordBreak: 'break-word', // 'normal' || 'break-all' || 'break-word' || 'keep-all'
  
    // Fonts
    fontSizeSmall: '80%',
    monospaceFont: fontFamily(['Consolas', 'Courier New', 'monospace']),
    primaryFont: fontFamily(['Calibri', 'Helvetica Neue', 'Arial', 'sans-serif']),
  
    // Avatar
    avatarBorderRadius: '50%',
    avatarSize: 40,
    botAvatarBackgroundColor: DEFAULT_UNDEFINED_COLOR, // defaults to accent color
    botAvatarImage: '',
    botAvatarInitials: '',
    userAvatarBackgroundColor: DEFAULT_UNDEFINED_COLOR, // defaults to accent color
    userAvatarImage: '',
    userAvatarInitials: '',
  
    // Bubble
    // TODO: Should we make a bubbleFromBot*
    bubbleBackground: '#ffffff',
    bubbleBorderColor: '#E6E6E6',
    bubbleBorderRadius: 2,
    bubbleBorderStyle: 'solid',
    bubbleBorderWidth: 1,
    bubbleFromUserBackground: '#ffffff',
    bubbleFromUserBorderColor: '#E6E6E6',
    bubbleFromUserBorderRadius: 2,
    bubbleFromUserBorderStyle: 'solid',
    bubbleFromUserBorderWidth: 1,
    bubbleFromUserNubOffset: 0,
    bubbleFromUserNubSize: 0,
    bubbleFromUserTextColor: '#000000',
    bubbleImageHeight: 240,
    bubbleMaxWidth: 480, // screen width = 600px
    bubbleMinHeight: 40,
    bubbleMinWidth: 250, // min screen width = 300px, Edge requires 372px (https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13621468/)
    bubbleNubOffset: 'bottom',
    bubbleNubSize: 0,
    bubbleTextColor: '#000000',
  
    // Markdown
    markdownRespectCRLF: true,
  
    // Rich Cards
    richCardWrapTitle: false, // Applies to subtitles as well
  
    // Root
    rootHeight: '100%',
    rootWidth: '100%',
    rootZIndex: 0, // "z-index" for the root container of Web Chat. This will form a new stacking context so "z-index" used in children won't pollute.
  
    // Scroll to end button
    hideScrollToEndButton: false,
  
    // Send box
    hideSendBox: false,
    hideUploadButton: false,
    microphoneButtonColorOnDictate: '#F33',
    sendBoxBackground: '#ffffff',
    sendBoxButtonColor: DEFAULT_UNDEFINED_COLOR, // defaults to subtle
    sendBoxButtonColorOnDisabled: '#CCC',
    sendBoxButtonColorOnFocus: '#333',
    sendBoxButtonColorOnHover: '#333',
    sendBoxDisabledTextColor: DEFAULT_UNDEFINED_COLOR, // defaults to subtle
    sendBoxHeight: 40,
    sendBoxMaxHeight: 200,
    sendBoxTextColor: '#000000',
    // TODO: We should deprecate this because there isn't an easy way to make the width of the send box, narrower than the transcript
    sendBoxBorderBottom: '',
    sendBoxBorderLeft: '',
    sendBoxBorderRight: '',
    sendBoxBorderTop: 'solid 1px #E6E6E6',
    sendBoxPlaceholderColor: DEFAULT_UNDEFINED_COLOR, // defaults to subtle
    sendBoxTextWrap: false,
  
    // Visually show spoken text
    showSpokenText: false,
  
    // Suggested actions
    suggestedActionDisabledColor: '#ffffff',
    suggestedActionColor: '#ffffff',
    suggestedActionBackground: '#ffffff',
    suggestedActionBorder: undefined, // split into 3, null
    suggestedActionBorderColor: '#f5f5f5', // defaults to accent
    suggestedActionBorderRadius: 0,
    suggestedActionBorderStyle: 'solid',
    suggestedActionBorderWidth: 2,
    suggestedActionDisabledBackground: DEFAULT_UNDEFINED_COLOR, // defaults to suggestedActionBackground
    suggestedActionDisabledBorder: null,
    suggestedActionDisabledBorderColor: '#E6E6E6',
    suggestedActionDisabledBorderStyle: 'solid',
    suggestedActionDisabledBorderWidth: 2,
    suggestedActionDisabledTextColor: DEFAULT_UNDEFINED_COLOR, // defaults to subtle
    suggestedActionHeight: 40,
    suggestedActionImageHeight: 20,
    suggestedActionLayout: 'carousel', // either 'carousel' or 'stacked'
    suggestedActionTextColor: null,
    suggestedActionRadius: 0,
    suggestedActionWidth: 0,
    suggestedActionDisabledRadius: 0,
    suggestedActionDisabledWidth: 0,
    suggestedActionsCarouselFlipperSize: 0,





  
    // Suggested actions 'stacked' layout
    suggestedActionsStackedHeight: 0, // defaults to 'auto' ** changed value from undefined to 0
    suggestedActionsStackedOverflow: null,
  
    // Timestamp
    groupTimestamp: true,
    sendTimeout: 20000,
    sendTimeoutForAttachments: 120000,
    timestampColor: DEFAULT_UNDEFINED_COLOR, // defaults to subtle
    timestampFormat: 'relative', // 'absolute'
  
    // Transcript overlay buttons (e.g. carousel and suggested action flippers, scroll to bottom, etc.)
    newMessagesButtonFontSize: '85%',
    transcriptOverlayButtonBackground: 'rgba(0, 0, 0, .6)',
    transcriptOverlayButtonBackgroundOnFocus: 'rgba(0, 0, 0, .8)',
    transcriptOverlayButtonBackgroundOnHover: 'rgba(0, 0, 0, .8)',
    transcriptOverlayButtonColor: '#ffffff',
    transcriptOverlayButtonColorOnFocus: DEFAULT_UNDEFINED_RGBA, // defaults to transcriptOverlayButtonColor
    transcriptOverlayButtonColorOnHover: DEFAULT_UNDEFINED_RGBA, // defaults to transcriptOverlayButtonColor
  
    // Video
    videoHeight: 270, // based on bubbleMaxWidth, 480 / 16 * 9 = 270
  
    // Connectivity UI
    connectivityIconPadding: PADDING_REGULAR * 1.2,
    connectivityMarginLeftRight: PADDING_REGULAR * 1.4,
    connectivityMarginTopBottom: PADDING_REGULAR * 0.8,
    connectivityTextSize: '75%',
    failedConnectivity: '#C50F1F',
    slowConnectivity: '#EAA300',
    notificationText: '#5E5E5E',
    slowConnectionAfter: 15000,
  
    typingAnimationBackgroundImage: null,
    typingAnimationDuration: 5000,
    typingAnimationHeight: 20,
    typingAnimationWidth: 64,
  
    spinnerAnimationBackgroundImage: null, //change from null to 0
    spinnerAnimationHeight: 16,
    spinnerAnimationWidth: 16,
    spinnerAnimationPadding: 12,
  
    enableUploadThumbnail: true,
    uploadThumbnailContentType: 'image/jpeg',
    uploadThumbnailHeight: 360,
    uploadThumbnailQuality: 1,
    uploadThumbnailWidth: 720,
  
    // deprecated; will be removed on or after 2021-02-01
    spinnerAnimationPaddingRight: undefined,
  
    // Toast UI
  
    // New debounce timeout value only affect new notifications.
    notificationDebounceTimeout: 400,
  
    hideToaster: false,
    toasterHeight: 32,
    toasterMaxHeight: 32 * 5,
    toasterSingularMaxHeight: 50,
    toastFontSize: '87%',
    toastIconWidth: 36,
    toastSeparatorColor: '#E8EAEC',
    toastTextPadding: 6,
  
    toastErrorBackgroundColor: '#FDE7E9',
    toastErrorColor: '#A80000',
    toastInfoBackgroundColor: '#CEF1FF',
    toastInfoColor: '#105E7D',
    toastSuccessBackgroundColor: '#DFF6DD',
    toastSuccessColor: '#107C10',
    toastWarnBackgroundColor: '#FFF4CE',
    toastWarnColor: '#3B3A39'
  }
  