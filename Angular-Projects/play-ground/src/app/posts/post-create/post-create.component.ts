import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enterValue = '';
  newPost = '';
  constructor() { }

  ngOnInit() {
  }

  onAlert() {
    alert('hi');
  }

  onAddPost() {
    this.newPost = this.enterValue;
  }
}
