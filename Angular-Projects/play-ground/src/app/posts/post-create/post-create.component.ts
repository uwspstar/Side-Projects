import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enterValue = '';
  newPost = '';
  age: number;
  nums: number[];
  stringArray: string[];
  mixArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;
  user: User;

  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '15100 ABC',
        city: 'Austin',
        state: 'TX'
      }
    };
  }

  ngOnInit() {
  }

  onAlert() {
    alert('hi');
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }

  showAge() {
    this.age = 30;
    this.nums = [1, 2, 3];
    return this.nums;
  }
  onAddPost() {
    this.newPost = this.enterValue;
  }
}


