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
      }
];
