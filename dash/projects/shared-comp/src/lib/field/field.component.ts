import { Component, Input } from '@angular/core';
import { Field, FieldType } from '../field';

@Component({
  selector: 'lib-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() field!: Field;
  @Input() model: any;
  TYPE = FieldType;

  handleBlur() {
    console.log(':: model',this.model);
  }

  /**
   * TEXT = 'TEXT', // DONE
    TEXTAREA = 'TEXTAREA', // DONE
    RICH_TEXT = 'RICH_TEXT',
    SINGLE_SELECT = 'SINGLE_SELECT', // DONE
    MULTI_SELECT = 'MULTI_SELECT',
    DATE = 'DATE', 
    RADIO = 'RADIO', // DONE 
    EMAIL = 'EMAIL', // DONE
    NUMBER = 'NUMBER', // DONE
    PASSWORD = 'PASSWORD', // DONE
    RELATION = 'RELATION'
   */
}
