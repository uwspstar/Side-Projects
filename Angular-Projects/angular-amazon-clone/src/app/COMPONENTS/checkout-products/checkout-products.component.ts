import { Component, EventEmitter,OnInit, Input,Output } from '@angular/core';

import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  @Input() checkout_products: any [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_cart_service: ShoppingCartService) {}

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
  }

  removeItem(item){
    this.shopping_cart_service.removerItem(item)
    this.deleteEvent.emit(item)
  }

}
