import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: any[];
  constructor(
    private apiService: ApiService
  ) { 
    this.items = [];
  }

  ngOnInit(): void {
    this.listItems();
  }

  listItems() {
    this.apiService.listItems().subscribe((data: any) => {
      this.items = data;
    })
  }


}
