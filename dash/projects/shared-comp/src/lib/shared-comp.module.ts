import { NgModule } from '@angular/core';
import { SharedCompComponent } from './shared-comp.component';
import { CreateSchemaComponent } from './create-schema/create-schema.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [SharedCompComponent, CreateSchemaComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, BrowserAnimationsModule, MaterialModule],
  exports: [COMPONENTS],
})
export class SharedCompModule {}
