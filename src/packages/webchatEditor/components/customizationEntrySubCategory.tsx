import * as React from 'react';
import { GroupedList, IGroup, IGroupHeaderProps, IGroupFooterProps } from 'office-ui-fabric-react/lib/GroupedList';
import { Link } from 'office-ui-fabric-react/lib/Link';
// import { createListItems, createGroups, IExampleItem } from '@uifabric/example-data';
import { mergeStyleSets, IRawStyle } from 'office-ui-fabric-react/lib/Styling';
import { CustomizationEntry, WebChatStyleOption } from '../../Redux/reduxState';
import { CustomizationEntrySelector } from './customizationEntrySelector';
import { mergeStyles } from '@fluentui/react';
import { useEffect, useState } from 'react';
import { Icon } from '@fluentui/react/lib/Icon';

const subCategoryHeaderContainer = mergeStyles(
    {
        display: "flex",
        alignItems: "center",
        margin: '10px 0'
    }
);

const subCategoryHeaderIcon = mergeStyles(
    {
        fontSize: '0.75rem',
        display: 'flex',
        aligntItems: 'center',
    }
);

const subCategoryHeader = mergeStyles(
    {
        display: 'flex',
        alignItems: 'center',
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
    const { entries, subCategory, styleOptions, updateStyleElement,
} = props;
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        setIsCollapsed(true); // collapses subCategory headers
    }, [subCategory]);        // when new Category is selected, subcategory changes
    

    const getStyleOptionValue = (key: any) => {
        return prop(styleOptions, key);
    };

    const prop = <T, K extends keyof T>(obj: T, key: K) => {
        return obj[key];
    }
    
    return (
        <div>
            <div
                onClick={()=> {setIsCollapsed(!isCollapsed)}}
                className={subCategoryHeaderContainer}
            >
                <span className={subCategoryHeaderIcon}>
                    <Icon iconName={isCollapsed ? "ChevronRightSmall" : "ChevronDownSmall"}/>
                </span>
                <span className={subCategoryHeader}>
                    {subCategory}
                </span>
            </div>
            {
                isCollapsed
                    ?   <div />
                    :   <div>
                            {entries.map((entry: CustomizationEntry) => (
                                    <CustomizationEntrySelector
                                        entry={entry}
                                        value={getStyleOptionValue(entry.id)}
                                        onChange={updateStyleElement}
                                    />
                                )
                            )}
                        </div>
            }
        </div>
    );
};
