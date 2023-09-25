import { NgModule } from '@angular/core';
import { SharedCompComponent } from './shared-comp.component';
import { CreateSchemaComponent } from './create-schema/create-schema.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FieldComponent } from './field/field.component';

const COMPONENTS = [SharedCompComponent, CreateSchemaComponent, FormComponent, FieldComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, BrowserAnimationsModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [COMPONENTS, MaterialModule],
})
export class SharedCompModule {}
