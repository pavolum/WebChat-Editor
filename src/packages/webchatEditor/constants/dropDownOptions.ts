interface IDropDownOptions {
    [key: string]: string[];
}

const DropDownOptions: IDropDownOptions = {
    borderStyles: [
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'none',
        'hidden',
    ],
    default: [
        'Options Not Yet Assigned',
    ],
    fonts: [
        'Arial',
        'Times New Roman',
        'Helvetica',
        'Times',
        'Courier New',
        'Verdana',
        'Courier',
        'Arial Narrow',
        'Candara',
        'Geneva',
        'Calibri',
        'Optima',
        'Cambria',
        'Garamond',
        'Perpetua',
        'Monaco',
        'Didot',
        'Brush Script MT',
        'Lucida Bright',
        'Copperplate',
    ],
    suggestedActionLayout: [
        'carousel',
        'stacked',
    ],
    timestampFormat: [
        'relative',
        'absolute',
    ],
    wordBreak: [
        'normal',
        'break-all',
        'break-word',
        'keep-all',
    ],
};

export default DropDownOptions;