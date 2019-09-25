import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
    // when componet initialize
    console.log('init....');

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '100 ABC',
          city: 'Austin',
          state: 'TX'
        }
      },
      {
        firstName: 'Lin',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '15100 ABC',
          city: 'Dollas',
          state: 'TX'
        }
      }
    ];

    this.addUser({
      firstName: 'Xw',
      lastName: 'Wee',
      age: 20,
      address: {
        street: '100 ABC',
        city: 'Austin',
        state: 'TX'
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
