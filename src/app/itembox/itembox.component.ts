import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-itembox',
  templateUrl: './itembox.component.html',
  styleUrls: ['./itembox.component.css']
})
export class ItemboxComponent implements OnInit {

  @Input() data: any = {};

  constructor(
    private apiService: ApiService
  ) { 
  }

  ngOnInit(): void {
  }

  addItemToCart(item: any){
    const user = this.apiService.getUser();
    this.apiService.addItemToCart(user.id, item.id).subscribe((a: any) => {
        alert("Item has been added to cart");
        this.apiService.listCart(user.id)
    })
  }

  removeItemFromCart(item: any){
    const user = this.apiService.getUser()
    this.apiService.removeItemFromCart(user.id, item.id).subscribe((a: any) => {
      alert("Item has removed from cart");
      this.apiService.listCart(user.id)
  })
  }

}
