import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'panel-sidebar',
  templateUrl: './panel-sidebar.component.html',
  styleUrl: './panel-sidebar.component.scss',
})
export class PanelSidebarComponent {}
