import { Component } from '@angular/core';
import { FormArray, FormBuilder,  FormGroup } from '@angular/forms';
import { getFieldTypeOptions } from '../field';

@Component({
  selector: 'lib-create-schema',
  templateUrl: './create-schema.component.html',
  styleUrls: ['./create-schema.component.css']
})
export class CreateSchemaComponent {

  form: any = {
    key: '',
    name: '',
    type: '',
    fields: [{ key: '', type: '', label: '' }]
  };
  fieldTypeOptions: any[] = getFieldTypeOptions();

  constructor(private fb: FormBuilder) {
  }

  addField() {
    this.form.fields.push({ key: '', type: '', label: '' });
  }

  deleteField(i: number) {
    this.form.fields.splice(i, 1);
  }

  handleSave() {
    console.log('save', this.form);
  }
  
}
