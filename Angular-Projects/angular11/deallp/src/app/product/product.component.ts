import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import {PRODUCTS} from '../../mocks/product.json';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public products: Array<Product> = [];

  constructor() {}

  ngOnInit(): void {
    console.log('PRODUCTS:',PRODUCTS);
    this.products = PRODUCTS;
  }

}