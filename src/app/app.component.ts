import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavigationComponent } from './navigation/navigation.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRowComponent } from "./product-row/product-row.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ProductListComponent, ProductRowComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-management-app';
}