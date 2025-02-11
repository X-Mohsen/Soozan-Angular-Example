import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/navbar.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(
    private readonly _navbar: NavbarService,
    private readonly _router: Router
  ) {}

  get title$(): Observable<string> {
    return this._navbar.title$.asObservable();
  }

  ngOnInit(): void {
    const _url = this._router.url;
    switch (_url) {
      case '/dashboard':
        this._navbar.setTitle('داشبورد');
        break;
      case '/orders':
        this._navbar.setTitle('سفارش');
        break;
      case '/messages':
        this._navbar.setTitle('پیام‌های شما');
        break;
      case '/support':
        this._navbar.setTitle('پشتیبانی');
        break;
      case '/works':
        this._navbar.setTitle('آثار');
        break;
      case '/artists':
        this._navbar.setTitle('آرتیست‌ها');
        break;
      case '/profile':
        this._navbar.setTitle('پروفایل');
        break;
    }
  }
}
