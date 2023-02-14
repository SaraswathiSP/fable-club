import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classList: String = "";

  loginForm: FormGroup;
  signUpForm: FormGroup;
  cartLength: Number;

  constructor(
    private apiService: ApiService
  ) { 
    this.cartLength = 0;
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.apiService.cartSubject.asObservable()
      .subscribe((data)=>{ this.cartLength =  (data || []).reduce((acc: number, obj: any) => {
        return acc + (obj?.quantity || 0);
      }, 0)});

      this.listCart();

  }

  toggleDropdown(currentValue: any) {
      this.classList =  currentValue == "" ? "active" : "";
  }

  logout(){
    localStorage.clear();
    this.apiService.userSubject.next(null);
    window.location.reload();
  }

  login(){
    this.apiService
      .login(this.loginForm.value)
      .subscribe((user: any) => {
        window.location.reload();
      });
  }

  signUp(){
    this.apiService
      .register(this.signUpForm.value)
      .subscribe((user: any) => {
      });
  }

  listCart(){
    let user = this.apiService.getUser();
    if(!user) return;
    this.apiService
      .listCart(user?.id)
      .subscribe((cartItems: any) => {
        
      });
  }
}
