import { Component, Input } from '@angular/core';

import { StacheNavLink } from './nav-link';
import { StacheNav } from './nav';

@Component({
  selector: 'stache-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class StacheSidebarComponent implements StacheNav {
  @Input()
  public routes: StacheNavLink[];
}
