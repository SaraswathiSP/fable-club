import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user: any;
  cartItems: any = [];
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user = this.apiService.getUser();
    if(!user) 
      this.router.navigate(["/"])
    this.user = user;
    this.listCart();

  }

  listCart(){
    this.apiService
      .listCart(this.user.id)
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems || [];
      })
  }


  addItemToCart(item: any){
    const user = this.apiService.getUser();
    this.apiService.addItemToCart(user.id, item.id).subscribe((a: any) => {
        alert("Item has been added to cart");
        this.apiService.listCart(user.id)
        window.location.reload();
    })
  }

  removeItemFromCart(item: any){
    const user = this.apiService.getUser()
    this.apiService.removeItemFromCart(user.id, item.id).subscribe((a: any) => {
      alert("Item has removed from cart");
      this.apiService.listCart(user.id)
      window.location.reload();
  })
  }

}
