import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: '{{title}}'
})
export class AppComponent {

}
