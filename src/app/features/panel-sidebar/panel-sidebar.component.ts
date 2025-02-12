import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarService } from '../../core/navbar.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  selector: 'panel-sidebar',
  templateUrl: './panel-sidebar.component.html',
  styleUrl: './panel-sidebar.component.scss',
})
export class PanelSidebarComponent {
  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  setPageTitle(title: string): void {
    this._navbar.setTitle(title);
  }

  constructor(private readonly _navbar: NavbarService) {}
}
