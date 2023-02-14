import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;
  userSubject: Subject<any>;
  cartSubject: Subject<any>;

  constructor(private http: HttpClient) {
    this.userSubject = new Subject<any>();
    this.cartSubject = new Subject<any>();
  }

  updateUser(user: any){
    if(!user) return;
    localStorage.setItem("user", JSON.stringify(user));
    this.userSubject.next(user);
  }

  updateCart(cartList: any){
    this.cartSubject.next(cartList);
  }

  getUser(){
     const user = localStorage.getItem("user");
     if(!user) return null;
     return JSON.parse(user);
  }

  login(payload: {username: string, password: string}){
    const url = `${this.apiUrl}/signin`;
    return this.http
      .post(url, payload)
      .pipe(tap((user: any) => this.updateUser(user)));
  }

  register(payload: {username: string, password: string}){
    const url = `${this.apiUrl}/signup`;
    return this.http
      .post(url, payload)
      .pipe(tap((user: any) => this.updateUser(user)));;
  }

  listItems(){
    const url = `${this.apiUrl}/items`;
    return this.http.get(url);
  }

  listCart(userId: Number){
    const url = `${this.apiUrl}/cart/${userId}`;
    return this.http.get(url).pipe(tap((cartList: any) => { this.updateCart(cartList )}));
  }

  addItemToCart(userId: Number, itemId: Number){
    const url = `${this.apiUrl}/users/${userId}/cart/${itemId}`;
    return this.http.post(url, {}).pipe(tap((cartList: any) => { this.updateCart(cartList )}));
  }
  
  removeItemFromCart(userId: number, itemId: number) {
    const url = `${this.apiUrl}/users/${userId}/cart/${itemId}`;
    return this.http.delete(url).pipe(tap((r: any) => { this.listCart(userId).subscribe(()=>{})}));
  }
}
