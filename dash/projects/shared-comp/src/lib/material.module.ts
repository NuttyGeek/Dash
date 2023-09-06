import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule];


@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [...MODULES]
})
export class MaterialModule { }
