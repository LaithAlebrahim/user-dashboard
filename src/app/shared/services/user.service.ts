import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheService } from './cache.service';
import { environment } from '../../../environments/environment'
import { PaginatedUser } from '../model/paginated-user.type';
import { UserResponse } from '../model/user.type';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = environment.apiUrl;

  constructor(private http: HttpClient, private cacheService: CacheService) { }

  getUsers(page: number): Observable<PaginatedUser> {
    const url = `${this.baseUrl}?page=${page}`;
    return this.cacheService.get<PaginatedUser>(url, () => this.http.get<PaginatedUser>(url));
  }
  
  getUser(id: number): Observable<UserResponse> {
    const url = `${this.baseUrl}/${id}`;
    return this.cacheService.get<UserResponse>(url, () => this.http.get<UserResponse>(url));
  }
  
  
}
