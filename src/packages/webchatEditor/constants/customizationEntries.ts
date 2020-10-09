import { CustomizationEntry } from "../../Redux/reduxState";
import { Category, SubCategory, UISelectorType } from "../../utilities/types";

const colorAndPaddingEntries: CustomizationEntry[] = [
  {
    id: 'accent',
    displayName: 'Accent',
    category: Category.ColorAndPaddings,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'backgroundColor',
    displayName: 'Background Color',
    category: Category.ColorAndPaddings,
    uiSelectorType: UISelectorType.colorSelector,
  },     
  { id: 'cardEmphasisBackgroundColor',        
    displayName: 'Card Emphasis Background Color',
    category: Category.ColorAndPaddings,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'paddingRegular',        
    displayName: 'Padding Regular',
    category: Category.ColorAndPaddings,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'paddingWide',        
    displayName: 'Padding Wide',
    category: Category.ColorAndPaddings,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'subtle'  ,      
    displayName: 'Subtle'  ,      
    category: Category.ColorAndPaddings,
    uiSelectorType: UISelectorType.colorSelector,
  },
];

const fontEntries: CustomizationEntry[] = [
  { id: 'fontSizeSmall',        
    displayName: 'Font Size Small',        
    category: Category.Fonts,
    uiSelectorType: UISelectorType.percentageSelector,
  },
  { id: 'monospaceFont',        
    displayName: 'Monospace Font',        
    category: Category.Fonts,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  { id: 'primaryFont',        
    displayName: 'Primary Font',        
    category: Category.Fonts,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  { id: 'messageActivityWordBreak',        
    displayName: 'Message Activity Word Break',        
    category: Category.Fonts,
    uiSelectorType: UISelectorType.defaultSelector,
  },
];

const avatarEntries: CustomizationEntry[] = [
  { id: 'avatarBorderRadius',        
    displayName: 'Avatar Border Radius',        
    category: Category.Avatar,
    subCategory: SubCategory.AvatarSettings,
    uiSelectorType: UISelectorType.percentageSelector,
  },
  { id: 'avatarSize',        
    displayName: 'Avatar Size',        
    category: Category.Avatar,
    subCategory: SubCategory.AvatarSettings,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'showAvatarInGroup',        
    displayName: 'Show Avatar In Group',        
    category: Category.Avatar,
    subCategory: SubCategory.AvatarSettings,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  { id: 'botAvatarBackgroundColor',        
    displayName: 'Background Color',        
    category: Category.Avatar,
    subCategory: SubCategory.BotAvatar,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'botAvatarImage',        
    displayName: 'Image',        
    category: Category.Avatar,
    subCategory: SubCategory.BotAvatar,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  { id: 'botAvatarInitials',        
    displayName: 'Initials',        
    category: Category.Avatar,
    subCategory: SubCategory.BotAvatar,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  { id: 'userAvatarBackgroundColor',        
    displayName: 'Background Color',        
    category: Category.Avatar,
    subCategory: SubCategory.UserAvatar,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'userAvatarImage',        
    displayName: 'Image',        
    category: Category.Avatar,
    subCategory: SubCategory.UserAvatar,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  { id: 'userAvatarInitials',        
    displayName: 'Initials',        
    category: Category.Avatar,
    subCategory: SubCategory.UserAvatar,
    uiSelectorType: UISelectorType.defaultSelector,
  },
];
 
const chatBubbleEntries: CustomizationEntry[] = [
  { id: 'bubbleBackground',        
    displayName: 'Background',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'bubbleTextColor',        
    displayName: 'Text Color',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'bubbleBorderColor',        
    displayName: 'Border Color',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'bubbleBorderRadius',        
    displayName: 'Border Radius',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleBorderStyle',        
    displayName: 'Border Style',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  { id: 'bubbleBorderWidth',        
    displayName: 'Border Width',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleNubSize',        
    displayName: 'Nub Size',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleNubOffset',        
    displayName: 'Nub Offset',        
    category: Category.ChatBubble,
    subCategory: SubCategory.AvatarChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleFromUserBackground',        
    displayName: 'Background',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'bubbleFromUserTextColor',        
    displayName: 'Text Color',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'bubbleFromUserBorderColor',        
    displayName: 'Border Color',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'bubbleFromUserBorderRadius',        
    displayName: 'Border Radius',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleFromUserBorderStyle',        
    displayName: 'Border Style',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  { id: 'bubbleFromUserBorderWidth',        
    displayName: 'Border Width',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleFromUserNubSize',        
    displayName: 'Nub Size',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleFromUserNubOffset',        
    displayName: 'Nub Offset',        
    category: Category.ChatBubble,
    subCategory: SubCategory.UserChatBubble,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleImageHeight',        
    displayName: 'Image Height',        
    category: Category.ChatBubble,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleMaxWidth',        
    displayName: 'Max Width',        
    category: Category.ChatBubble,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleMinHeight',        
    displayName: 'Min Height',        
    category: Category.ChatBubble,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'bubbleMinWidth',        
    displayName: 'Min Width',        
    category: Category.ChatBubble,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
];

const sendBoxEntries: CustomizationEntry[] = [
  { id: 'sendBoxHeight',        
    displayName: 'Height',        
    category: Category.SendBox,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'sendBoxMaxHeight',        
    displayName: 'Max Height',        
    category: Category.SendBox,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'hideSendBox',        
    displayName: 'Hide Send Box',        
    category: Category.SendBox,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  { id: 'hideUploadButton',        
    displayName: 'Hide Upload Button',        
    category: Category.SendBox,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  { id: 'sendBoxTextWrap',        
    displayName: 'Text Wrap',        
    category: Category.SendBox,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  { id: 'sendBoxTextColor',        
    displayName: 'Text Color',        
    category: Category.SendBox,
    subCategory: SubCategory.Colors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'sendBoxBackground',        
    displayName: 'Background Color',        
    category: Category.SendBox,
    subCategory: SubCategory.Colors,
    uiSelectorType: UISelectorType.colorSelector,
    
  },
  { id: 'sendBoxDisabledTextColor',        
    displayName: 'Disabled Text Color',        
    category: Category.SendBox,
    subCategory: SubCategory.Colors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'sendBoxPlaceholderColor',        
    displayName: 'Placeholder Color',        
    category: Category.SendBox,
    subCategory: SubCategory.Colors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'sendBoxButtonColor',
    displayName: 'Default',
    category: Category.SendBox,
    subCategory: SubCategory.ButtonColors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'sendBoxButtonColorOnDisabled',
    displayName: 'On Disabled',    
    category: Category.SendBox,
    subCategory: SubCategory.ButtonColors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'sendBoxButtonColorOnFocus',
    displayName: 'On Focus', 
    category: Category.SendBox,
    subCategory: SubCategory.ButtonColors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'sendBoxButtonColorOnHover',
    displayName: 'On Hover',        
    category: Category.SendBox,
    subCategory: SubCategory.ButtonColors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'microphoneButtonColorOnDictate',        
    displayName: 'Microphone Button Color On Dictate',        
    category: Category.SendBox,
    subCategory: SubCategory.ButtonColors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  { id: 'sendBoxBorderBottom',        
    displayName: 'Bottom',        
    category: Category.SendBox,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  { id: 'sendBoxBorderLeft',        
    displayName: 'Left',        
    category: Category.SendBox,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  { id: 'sendBoxBorderRight',        
    displayName: 'Right',        
    category: Category.SendBox,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  { id: 'sendBoxBorderTop',        
    displayName: 'Top',        
    category: Category.SendBox,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.defaultSelector,
  },
];

const suggestedActionsEntries: CustomizationEntry[] = [
  {
    id: 'suggestedActionBackground',
    displayName: 'Background Color',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Colors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'suggestedActionDisabledBackground',
    displayName: 'Background Color (Disabled)',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Colors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'suggestedActionDisabledTextColor',
    displayName: 'Text Color (Disabled)',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Colors,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'suggestedActionBorder',
    displayName: 'Border',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  {
    id: 'suggestedActionColor',
    displayName: 'Color',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'suggestedActionRadius',
    displayName: 'Radius',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionStyle',
    displayName: 'Style',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  {
    id: 'suggestedActionWidth',
    displayName: 'Width',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Border,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionDisabledBorder',
    displayName: 'Border',
    category: Category.SuggestedActions,
    subCategory: SubCategory.BorderDisabled,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  {
    id: 'suggestedActionDisabledColor',
    displayName: 'Color',
    category: Category.SuggestedActions,
    subCategory: SubCategory.BorderDisabled,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'suggestedActionDisabledRadius',
    displayName: 'Radius',
    category: Category.SuggestedActions,
    subCategory: SubCategory.BorderDisabled,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionDisabledStyle',
    displayName: 'Style',
    category: Category.SuggestedActions,
    subCategory: SubCategory.BorderDisabled,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  {
    id: 'suggestedActionDisabledWidth',
    displayName: 'Width',
    category: Category.SuggestedActions,
    subCategory: SubCategory.BorderDisabled,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionHeight',
    displayName: 'Height',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionImageHeight',
    displayName: 'Image Height',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionLayout',
    displayName: 'Layout',
    category: Category.SuggestedActions,
    subCategory: SubCategory.Layout,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  {
    id: 'suggestedActionsCarouselFlipperCursor',
    displayName: 'Cursor',
    category: Category.SuggestedActions,
    subCategory: SubCategory.CarouselFlipper,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  {
    id: 'suggestedActionsCarouselFlipperBoxWidth',
    displayName: 'Box Width',
    category: Category.SuggestedActions,
    subCategory: SubCategory.CarouselFlipper,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionsCarouselFlipperSize',
    displayName: 'Size',
    category: Category.SuggestedActions,
    subCategory: SubCategory.CarouselFlipper,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionsStackedHeight',
    displayName: "Max Height",
    category: Category.SuggestedActions,
    subCategory: SubCategory.Container,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'suggestedActionsStackedOverflow',
    displayName: "Overflow Setting",
    category: Category.SuggestedActions,
    subCategory: SubCategory.Container,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
];

const timestampEntries: CustomizationEntry[] = [
  {
    id: 'groupTimestamp',
    displayName: "Group Timestamp",
    category: Category.Timestamp,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  {
    id: 'sendTimeout',
    displayName: "Send Timeout",
    category: Category.Timestamp,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'sendTimeoutForAttachments',
    displayName: "Send Timeout for Attachments",
    category: Category.Timestamp,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'timestampColor',
    displayName: "Color",
    category: Category.Timestamp,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'timestampFormat',
    displayName: "Format",
    category: Category.Timestamp,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
];

const trascriptOverlayButtonsEntries: CustomizationEntry[] = [
  {
    id: 'transcriptOverlayButtonColor',
    displayName: "Color",
    category: Category.TranscriptOverlayButtons,
    subCategory: SubCategory.ButtonDefault,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'transcriptOverlayButtonBackground',
    displayName: "Background Color",
    category: Category.TranscriptOverlayButtons,
    subCategory: SubCategory.ButtonDefault,
    uiSelectorType: UISelectorType.rgbaSelector,
  },
  {
    id: 'newMessagesButtonFontSize',
    displayName: "New Message Button Font Size",
    category: Category.TranscriptOverlayButtons,
    subCategory: SubCategory.ButtonDefault,
    uiSelectorType: UISelectorType.percentageSelector,
  },
  {
    id: 'transcriptOverlayButtonColorOnFocus',
    displayName: "Color",
    category: Category.TranscriptOverlayButtons,
    subCategory: SubCategory.ButtonOnFocus,
    uiSelectorType: UISelectorType.rgbaSelector,
  },
  {
    id: 'transcriptOverlayButtonBackgroundOnFocus',
    displayName: "Background Color",
    category: Category.TranscriptOverlayButtons,
    subCategory: SubCategory.ButtonOnFocus,
    uiSelectorType: UISelectorType.rgbaSelector,
  },
  {
    id: 'transcriptOverlayButtonColorOnHover',
    displayName: "Color",
    category: Category.TranscriptOverlayButtons,
    subCategory: SubCategory.ButtonOnHover,
    uiSelectorType: UISelectorType.rgbaSelector,
  },
  {
    id: 'transcriptOverlayButtonBackgroundOnHover',
    displayName: "Background Color",
    category: Category.TranscriptOverlayButtons,
    subCategory: SubCategory.ButtonOnHover,
    uiSelectorType: UISelectorType.rgbaSelector,
  },
];

const connectivityUIEntries: CustomizationEntry[] = [
  {
    id: 'connectivityIconPadding',
    displayName: "Icon Padding",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.ConnectivityStyling,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'connectivityMarginLeftRight',
    displayName: "Margin - Left and Right",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.ConnectivityStyling,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'connectivityMarginTopBottom',
    displayName: "Margin - Top and Bottom",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.ConnectivityStyling,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'connectivityTextSize',
    displayName: "Text Size",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.ConnectivityStyling,
    uiSelectorType: UISelectorType.percentageSelector,
  },
  {
    id: 'failedConnectivity',
    displayName: "Failed Connectivity Color",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.ConnectivityStyling,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'slowConnectivity',
    displayName: "Slow Connectivity Color",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.ConnectivityStyling,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'notificationText',
    displayName: "Notification Text Color",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.ConnectivityStyling,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'typingAnimationBackgroundImage',
    displayName: "Background Image (url)",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.TypingAnimation,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  {
    id: 'typingAnimationDuration',
    displayName: "Duration",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.TypingAnimation,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'typingAnimationHeight',
    displayName: "Height",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.TypingAnimation,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'typingAnimationWidth',
    displayName: "Width",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.TypingAnimation,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'spinnerAnimationBackgroundImage',
    displayName: "Background Image (url)",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.SpinnerAnimation,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'spinnerAnimationHeight',
    displayName: "Height",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.SpinnerAnimation,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'spinnerAnimationWidth',
    displayName: "Width",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.SpinnerAnimation,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'spinnerAnimationPadding',
    displayName: "Padding",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.SpinnerAnimation,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'enableUploadThumbnail',
    displayName: "Enable",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.UploadThumbnail,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  {
    id: 'uploadThumbnailContentType',
    displayName: "Type",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.UploadThumbnail,
    uiSelectorType: UISelectorType.dropDownSelector,
  },
  {
    id: 'uploadThumbnailHeight',
    displayName: "Height",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.UploadThumbnail,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'uploadThumbnailWidth',
    displayName: "Width",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.UploadThumbnail,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'uploadThumbnailQuality',
    displayName: "Quality",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.UploadThumbnail,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  {
    id: 'slowConnectionAfter',
    displayName: "Slow Connection After",
    category: Category.ConnectivityUI,
    subCategory: SubCategory.SlowConnectionTimeOut,
    uiSelectorType: UISelectorType.integerSelector,
  },
];

const toastUIEntries: CustomizationEntry[] = [
  {
    id: 'hideToaster',
    displayName: "Hide Toaster",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterLayout,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  {
    id: 'toasterHeight',
    displayName: "Height",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterLayout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'toasterMaxHeight',
    displayName: "Max Height",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterLayout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'toasterSingularMaxHeight',
    displayName: "Singular Max Height",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterLayout,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'toastFontSize',
    displayName: "Font Size",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterStyling,
    uiSelectorType: UISelectorType.percentageSelector,
  },
  {
    id: 'toastIconWidth',
    displayName: "Icon Width",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterStyling,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'toastSeparatorColor',
    displayName: "Separator Color",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterStyling,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastTextPadding',
    displayName: "Text Padding",
    category: Category.ToastUI,
    subCategory: SubCategory.ToasterStyling,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'toastErrorColor',
    displayName: "Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Error,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastErrorBackgroundColor',
    displayName: "Background Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Error,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastInfoColor',
    displayName: "Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Info,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastInfoBackgroundColor',
    displayName: "Background Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Info,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastSuccessColor',
    displayName: "Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Success,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastSuccessBackgroundColor',
    displayName: "Background Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Success,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastWarnColor',
    displayName: "Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Warn,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'toastWarnBackgroundColor',
    displayName: "Background Color",
    category: Category.ToastUI,
    subCategory: SubCategory.Warn,
    uiSelectorType: UISelectorType.colorSelector,
  },
  {
    id: 'notificationDebounceTimeout',
    displayName: "Notification Debounce Timeout",
    category: Category.ToastUI,
    subCategory: SubCategory.NotificationTimeout,
    uiSelectorType: UISelectorType.integerSelector,
  },
];

const miscellaneousEntries: CustomizationEntry[] = [
  { id: 'richCardWrapTitle',        
    displayName: 'Rich Card Wrap Title',        
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  { id: 'rootHeight',        
    displayName: 'Root Height',        
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.percentageSelector,
  },
  { id: 'rootWidth',        
    displayName: 'Root Width',        
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.percentageSelector,
  },
  { id: 'rootZIndex',        
    displayName: 'Root Index',        
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.integerSelector,
  },
  { id: 'hideScrollToEndButton',        
    displayName: 'Hide Scroll To End Button',        
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  { id: 'showSpokenText',        
    displayName: 'Show Spoken Text',        
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.booleanSelector,
  },
  {
    id: 'videoHeight',
    displayName: "Video Height",
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.integerSelector,
  },
  {
    id: 'emojiSet',
    displayName: "Emoji Set",
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.defaultSelector,
  },
  { id: 'markdownRespectCRLF',        
    displayName: 'Markdown Respect CRLF',        
    category: Category.Miscellaneous,
    uiSelectorType: UISelectorType.booleanSelector,
  }, 
]

export const customizationEntries: CustomizationEntry[] = [
    ...colorAndPaddingEntries,
    ...fontEntries,
    ...avatarEntries,
    ...chatBubbleEntries,
    ...sendBoxEntries,
    ...suggestedActionsEntries,
    ...timestampEntries,
    ...trascriptOverlayButtonsEntries,
    ...connectivityUIEntries,
    ...toastUIEntries,
    ...miscellaneousEntries,
];
