import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.scss'],
})
export class WebappComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.isSideNavCollapsed && this.screenWidth > 788) {
      styleClass = 'body-trimmed';
    }
    return styleClass;
  }

  mobileToggle() {
    this.sidebar.mobileView();
  }
}
