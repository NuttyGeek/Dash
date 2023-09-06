export enum FieldType {
    TEXT = 'TEXT',
    TEXTAREA = 'TEXTAREA',
    RICH_TEXT = 'RICH_TEXT',
    SINGLE_SELECT = 'SINGLE_SELECT',
    MULTI_SELECT = 'MULTI_SELECT',
    DATE = 'DATE',
    RADIO = 'RADIO',
    EMAIL = 'EMAIL',
    NUMBER = 'NUMBER',
    PASSWORD = 'PASSWORD',
    RELATION = 'RELATION'
}

export interface FieldOption { 
    label: string;
    value: any;
}

export interface Field {
    key: string;
    type: FieldType;
    label: string;
    options?: FieldOption[];
    initialValue?: any;
}

export const getFieldTypeOptions = (): any[] => {
    return Object.values(FieldType);
}