import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared';
import { PanelSidebarComponent } from '../../features';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-panel-layout',
  imports: [NavbarComponent, RouterOutlet, PanelSidebarComponent],
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.scss',
})
export class PanelLayoutComponent {}
