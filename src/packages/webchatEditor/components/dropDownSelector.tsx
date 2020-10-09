import React from "react";
import DropDownOptions from "../constants/dropDownOptions";
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

interface IOption {
    key: string,
    text: string,
    itemType?: DropdownMenuItemType,
}

const createDropDownOptions = (options: string[]): IOption[] => (
    options.map((option) => (
        {
            key: option,
            text: option,
        }
    ))
);

const retrieveOptionType = (id: string): string => {
    switch(id) {
        case 'bubbleBorderStyle':
        case 'bubbleFromUserBorderStyle':
        case 'suggestedActionStyle':
        case 'suggestedActionDisabledStyle':
        
            return 'borderStyles';
        
        case 'monospaceFont':
        case 'primaryFont':

            return 'fonts';
        
        case 'suggestedActionLayout':

            return 'suggestedActionLayout';
        
        case 'timestampFormat':

            return 'timestampFormat';
        
        case 'messageActivityWordBreak':

            return 'wordBreak';

        case 'default':
        default:

            return 'default';
    }
}

interface DefaultSelectorProps {
    id: string;
    value: any;
    onChange: (styleElementName: string, value: any) => void;
}

export const DropDownSelector = (props: DefaultSelectorProps) => {
    const {id, value, onChange } = props;
    const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
    
    const setValue = (
            event: React.FormEvent<HTMLDivElement>,
            option?: IDropdownOption | undefined,
            index?: number | undefined
        ): void => {
            onChange(id, option!.text);
            setSelectedItem(option);
    };

    const optionType: string = retrieveOptionType(id);
    console.log(id);
    console.log(optionType);
    console.log(' ');
    
    const dropDownOptions: IOption[] = createDropDownOptions(DropDownOptions[optionType]);
    
    return (
       <Dropdown
            selectedKey={selectedItem ? selectedItem.key : undefined}
            onChange={setValue}
            placeholder={value}
            options={dropDownOptions}
            styles={dropdownStyles}
        />
    );
};
