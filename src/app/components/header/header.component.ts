import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchControl: FormControl = new FormControl('', [Validators.pattern('^[0-9]*$')]);
  
  constructor(UserLists: UsersListComponent) {
    this.searchControl.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
    ).subscribe(searchValue => {
      if (searchValue !== null && this.searchControl.valid) {
        const ID = parseInt(searchValue, 10);
        UserLists.filterUsersByUserId(ID);
      }
    });
  }
}
