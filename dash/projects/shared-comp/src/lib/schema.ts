import { single } from 'rxjs';
import { Field, FieldType } from './field';

export enum SchemaType {
  SINGLE = 'SINGLE',
  COLLECTION = 'COLLECTION',
}

export interface Schema {
  key: string;
  name: string;
  type: SchemaType;
  fields: Field[];
}

export const sample_schema: Schema = {
  key: 'product',
  name: 'Product',
  type: SchemaType.COLLECTION,
  fields: [
    {
      key: 'title',
      type: FieldType.TEXT,
      label: 'Title',
      initialValue: '',
      props: {},
      required: false,
    },
    {
        key: 'password',
        type: FieldType.PASSWORD,
        label: 'Password',
        initialValue: '',
        props: {},
        required: false,
      },
    {
        key: 'age',
        type: FieldType.NUMBER,
        label: 'Age',
        initialValue: '',
        props: {},
        required: false,
      },
    {
      key: 'comment',
      type: FieldType.TEXTAREA,
      label: 'Comment',
      initialValue: '',
      props: {},
      required: false,
    },
    
    {
      key: 'email',
      type: FieldType.EMAIL,
      label: 'Email',
      initialValue: '',
      props: {},
      required: false,
    },
    {
      key: 'options',
      type: FieldType.SINGLE_SELECT,
      label: 'State',
      initialValue: '',
      props: {
        options: [{ label: 'option 1', value: 'option 1'}, { label: 'option 2', value: 'option 2'}]
      },
      required: false,
    },
    {
        key: 'gender',
        type: FieldType.RADIO,
        label: 'Gender',
        initialValue: '',
        props: {
          options: [{ label: 'Male', value: 'Male'}, { label: 'Female', value: 'Female'}, { label: 'Other', value: 'Other'}]
        },
        required: false,
      },
      {
      key: 'date',
      type: FieldType.DATE,
      label: 'Date',
      initialValue: '',
      props: {},
      required: false,
    },
  ],
};

// Create Form from schema
// CReate array of data from schema
