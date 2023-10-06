import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MODULES = [MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatRadioModule,MatDatepickerModule, MatIconModule, MatSidenavModule, MatListModule];


@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [...MODULES]
})
export class MaterialModule { }
