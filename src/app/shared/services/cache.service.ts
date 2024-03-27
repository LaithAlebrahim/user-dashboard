import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor() { }

  get<T>(key: string, fetchFn: () => Observable<T>): Observable<T> {

    if (this.cache.has(key)) {
      return of(this.cache.get(key));
    }
    return fetchFn().pipe(
      tap(data => this.cache.set(key, data))
    );
  }

  clear(key?: string): void {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
}
