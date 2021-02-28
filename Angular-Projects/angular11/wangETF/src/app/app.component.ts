import { Component } from '@angular/core';
import { INews } from 'src/interface/news';
import { StockRepository } from 'src/repository/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'wangETF';
  news : INews[] | any;

  constructor(private stockRepo: StockRepository) {}

  ngOnInit(): void {
    this.stockRepo.getData().then(res => {
      this.news = res;
      console.log('ngOnInit news', this.news);
    });
  }

  CallAPI() {
    this.stockRepo.getData().then(res => {
      this.news = res;
      console.log('CallAPI news', JSON.stringify(this.news));
    });
  }
}

