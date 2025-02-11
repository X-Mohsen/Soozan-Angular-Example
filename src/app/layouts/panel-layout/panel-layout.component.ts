import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared';
import { PanelSidebarComponent } from '../../features';

@Component({
  selector: 'app-panel-layout',
  imports: [NavbarComponent, PanelSidebarComponent],
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.scss',
})
export class PanelLayoutComponent {}
