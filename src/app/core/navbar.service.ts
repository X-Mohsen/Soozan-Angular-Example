import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  public readonly title$ = new BehaviorSubject<string>('داشبورد');

  public setTitle(newTitle: string): void {
    this.title$.next(newTitle);
  }
}
