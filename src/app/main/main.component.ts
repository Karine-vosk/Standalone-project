import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  nav: any[] = [
    {
      path: '/main',
      name: 'First tab',
      enabled: true
    },
    {
      path: '/main/second-page',
      name: 'Second tab',
      enabled: true
    }
  ];
  activeLink: string = this.nav[0].path;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeLink = this.router.url;
  }
}
