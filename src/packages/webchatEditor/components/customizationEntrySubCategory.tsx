import * as React from 'react';
import { GroupedList, IGroup, IGroupHeaderProps, IGroupFooterProps } from 'office-ui-fabric-react/lib/GroupedList';
import { Link } from 'office-ui-fabric-react/lib/Link';
// import { createListItems, createGroups, IExampleItem } from '@uifabric/example-data';
import { mergeStyleSets, IRawStyle } from 'office-ui-fabric-react/lib/Styling';
import { CustomizationEntry, WebChatStyleOption } from '../../Redux/reduxState';
import { CustomizationEntrySelector } from './customizationEntrySelector';
import { mergeStyles } from '@fluentui/react';

const subCategoryHeaderStyle = mergeStyles(
    {
      fontSize: '1rem',
      color: '#212529',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
);

interface CustomizationEntrySubCategoryProps {
    entries: CustomizationEntry[];
    subCategory: string;
    styleOptions: WebChatStyleOption;
    updateStyleElement: (styleElementName: string, value: any) => void;
}

export const CustomizationEntrySubCategory = (props: CustomizationEntrySubCategoryProps) => {
    const { entries, subCategory, styleOptions, updateStyleElement } = props;

    const onRenderHeader = (props?: IGroupHeaderProps): JSX.Element | null => {
        if (props) {
          const toggleCollapse = (): void => {
            props.onToggleCollapse!(props.group!);
          };
          return (
            <div
                className={subCategoryHeaderStyle}
                onClick={toggleCollapse}
            >
                <span style={props.group!.isCollapsed ? {transform: 'rotate(90deg)'} : {}}>
                    <svg width="11" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg" transform={props.group!.isCollapsed ? '' : 'rotate(90)'} >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.10274 5.50003L0.5 1.31213L1.19863 0.500031L5.5 5.50003L1.19863 10.5L0.5 9.68793L4.10274 5.50003Z"
                            fill="black"
                            stroke="black"
                            stroke-width="0.8"
                        />
                    </svg>                  
                </span>
                <span>
                    {` ${subCategory}`} 
                </span>
            </div>
          );
        }
      
        return null;
    };

    const onRenderCell = (nestingDepth?: number, item?: CustomizationEntry, itemIndex?: number): React.ReactNode => {
        
        const getStyleOptionValue = (key: any) => {
            return prop(styleOptions, key);
        };

        function prop<T, K extends keyof T>(obj: T, key: K) {
            return obj[key];
        }
        
        return item ? (
            <CustomizationEntrySelector
                entry={item}
                value={getStyleOptionValue(item.id)}
                onChange={updateStyleElement}
            />
        ) : null;
      };
      
    const groupedListProps = {
        onRenderHeader,
    };
    const subCategoryGroup: IGroup = {
        count: entries.length,
        key: subCategory,
        name: subCategory,
        startIndex: 0,
        data: entries,
        isCollapsed: true,
    }
    return (
        <GroupedList items={entries} onRenderCell={onRenderCell} groupProps={groupedListProps} groups={[subCategoryGroup]} />
    );
};
