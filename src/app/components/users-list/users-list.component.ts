import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

import { PaginatedUser } from '../../shared/model/paginated-user.type';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/model/user.type';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] | null = null;
  allusers: User[] | null = null;
  totalUsers = 0;
  usersPerPage = 0;
  currentPage = 0;
  isLoading = true; 
  Error: boolean= false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this.userService.getUsers(page).subscribe((usersData:PaginatedUser) => {
      this.allusers = usersData.data;
      this.totalUsers = usersData.total;
      this.usersPerPage = usersData.per_page;
      this.currentPage = usersData.page;
      this.isLoading = false;
      this.users=this.allusers
    }),(error: unknown) =>{
      console.error('Server Rejection', error);
      this.Error=true
    };
  }

  onPaginateChange(event: PageEvent): void {
    this.loadUsers(event.pageIndex + 1);
  }

  onClick(id: number): void {
    this.router.navigate(['/users', id]);
  }
  filterUsersByUserId(userId: number): void {
    if(this.allusers && !Number.isNaN(userId))
    { 
      this.users = this.allusers.filter(user => user.id==userId)
      this.totalUsers = 1;
      this. usersPerPage = 1;
    }
    else if(Number.isNaN(userId)) {
      this.userService.getUsers(this.currentPage).subscribe((usersData:PaginatedUser) => {
        this.allusers = usersData.data;
        this.totalUsers = usersData.total;
        this.usersPerPage = usersData.per_page;
        this.isLoading = false;
        this.users=this.allusers
      });
    }
  }
}
