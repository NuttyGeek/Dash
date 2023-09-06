import { Component } from '@angular/core';
import { FormArray, FormBuilder,  FormGroup } from '@angular/forms';
import { getFieldTypeOptions } from '../field';

@Component({
  selector: 'lib-create-schema',
  templateUrl: './create-schema.component.html',
  styleUrls: ['./create-schema.component.css']
})
export class CreateSchemaComponent {

  form: FormGroup;
  fieldTypeOptions: any[] = getFieldTypeOptions();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      key: [''],
      name: [''],
      type: [''],
      fields: this.fb.array([{ key: '', type: '', label: '' }])
    })
  }

  get fields() {
    return this.form.controls['fields'] as FormArray;
  }

  addField() {
    this.fields.push(this.fb.group({ key: '', type: '', label: '' }));
  }

  deleteField(i: number) {
    this.fields.removeAt(i);
  }

  handleSave() {
    console.log('save', this.form.value);
    
  }



}
