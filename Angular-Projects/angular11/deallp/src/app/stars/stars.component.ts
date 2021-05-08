import { Component, Input, OnInit } from '@angular/core';
import {STARS} from '../../mocks/star.json';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  

  @Input()
  public rating : number = 0;

  public stars : boolean[] | any = [];

  constructor() { }

  ngOnInit(): void {
    let ratingMap= new Map(Object.entries(STARS));
    this.stars = ratingMap.get(this.rating.toString());
    console.log('this.rating',this.rating,'stars', this.stars);
  }

}
