import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductRowComponent } from '../product-row/product-row.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductRowComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { sku: 'MYSHOES', name: 'green adidas gazelle', imageUrl: 'https://via.placeholder.com/150', department: ['Men', 'Shoes'], price: 119.99 },
    { sku: 'NEATOJACKET', name: 'nike T-sheert', imageUrl: 'https://via.placeholder.com/150', department: ['Women', 'T-sheerts'], price: 23.99 },
    { sku: 'NICEHAT', name: 'Mercedes F1 white Hat', imageUrl: 'https://via.placeholder.com/150', department: ['Men', 'Accessories'], price: 29.99 },
    { sku: 'SPORTHAT', name: 'racing helmet', imageUrl: 'https://via.placeholder.com/150', department: ['Men', 'Accessories'], price: 200.00 },
    { sku: 'MYSHOES', name: 'green adidas gazelle', imageUrl: 'https://via.placeholder.com/150', department: ['Men', 'Shoes'], price: 119.99 },
    { sku: 'NEATOJACKET', name: 'nike T-sheert', imageUrl: 'https://via.placeholder.com/150', department: ['Women', 'T-sheerts'], price: 23.99 },
  ];

  constructor() {
    console.log(this.products); 
  }
}