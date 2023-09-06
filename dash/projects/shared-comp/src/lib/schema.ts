import { Field } from "./field";

export enum SchemaType { 
    SINGLE = 'SINGLE',
    COLLECTION = 'COLLECTION'
}

export interface Schema {
    key: string;
    name: string;
    type: SchemaType;
    fields: Field[];
}


// Create Form from schema
// CReate array of data from schema 