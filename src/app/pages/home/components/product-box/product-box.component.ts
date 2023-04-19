import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'cat toy',
    price: 15,
    category: 'pets',
    description: 'test',
    image: "https://via.placeholder.com/150"
  }
  @Output() addToCart = new EventEmitter

  constructor() {}

  ngOnInit(): void {

  }

  onAddCart(): void {
    this.addToCart.emit(this.product)
  }
}
