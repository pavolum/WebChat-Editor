import { CustomizationEntry } from "../../Redux/reduxState";
import { Category, UISelectorType } from "../../utilities/types";

export const customizationEntries: CustomizationEntry[] = [
    {
        id: 'backgroundColor',
        displayName: 'Background Color',
        category: Category.Color,
        uiSelectorType: UISelectorType.defaultSelector,
      },
      {
        id: 'bubbleBorderRadius',
        displayName: 'Bubble Border Radius',
        category: Category.Color,
        uiSelectorType: UISelectorType.defaultSelector,
      },
      {
        id: 'botAvatarInitials',
        displayName: 'Bot Avatar Initials',
        category: Category.Bubble,
        uiSelectorType: UISelectorType.defaultSelector,
      },
      {
        id: 'userAvatarInitials',
        displayName: 'User Avatar Initials',
        category: Category.Bubble,
        uiSelectorType: UISelectorType.defaultSelector,
      }
];
