import { Component } from '@angular/core';
import { Schema, sample_schema } from '../schema';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  schema: Schema = sample_schema;
  model: any = {};

  constructor() {
    this.schema.fields.forEach((field) => {
      this.model[field.key] = '';
    });
  }
}
