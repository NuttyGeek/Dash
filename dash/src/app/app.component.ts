import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dash';
  opened = true;

  form = new FormGroup({});
  model = {};

  onSubmit() {
    console.log(':: form', this.model);
  }

  handleToggle() {
    console.log(':: toggle');
    this.opened = !this.opened;
  }
}
