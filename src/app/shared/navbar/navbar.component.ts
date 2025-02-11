import { Component } from '@angular/core';
import { NavbarService } from '../../core/navbar.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private readonly _navbar: NavbarService) {}

  get title$(): Observable<string> {
    return this._navbar.title$.asObservable();
  }
}
