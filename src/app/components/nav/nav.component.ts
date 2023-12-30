import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isDrilldownMenuActive: boolean = false;
  currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((data: any) => {
        this.currentUrl = data['url'];
      });
  }

  drilldownMenuOpen() {
    this.isDrilldownMenuActive = true;
  }

  drilldownMenuClose() {
    this.isDrilldownMenuActive = false;
  }

  navigateTo(url: string) {
    this.drilldownMenuClose();
    this.router.navigate([url]);
  }
}
