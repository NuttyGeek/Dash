import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  links: any [] =[{ name: 'Home', isActive: true }, { name: 'Profile', isActive: false }];
}
