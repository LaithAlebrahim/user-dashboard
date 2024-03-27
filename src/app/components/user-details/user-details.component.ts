import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { UserService } from '../../shared/services/user.service';
import { User ,UserResponse} from '../../shared/model/user.type';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;
  isLoading: boolean = true
  Error: boolean =false;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.userService.getUser(params['id']))
    ).subscribe((response:UserResponse) => {
      this.user = response.data;
      this.isLoading=false;
    }, error => {
      console.error('User not found', error);
      this.Error=true
    });
  }
  
goBack(): void {
  this.location.back();
}

}
