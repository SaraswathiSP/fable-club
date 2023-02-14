import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input("classList") classList: String = "";
  @Output() onClose: EventEmitter<any>;

  @Input() loginForm: FormGroup;
  @Input() signUpForm: FormGroup;
  @Output() onLogin: EventEmitter<any>;
  @Output() onSignUp: EventEmitter<any>;
  @Output() onLogout: EventEmitter<any>;

  isLoggedIn: Boolean = false;
  isLogin: Boolean;

  constructor(
    private apiService: ApiService
  ) {
    this.isLogin = true;

    this.onClose = new EventEmitter();
    this.onLogin = new EventEmitter();
    this.onLogout = new EventEmitter();
    this.onSignUp = new EventEmitter();

    this.loginForm = null as  any;
    this.signUpForm = null as any;

    this.apiService.userSubject
      .asObservable()
      .subscribe((user) => {
        this.isLoggedIn = false;
        if(user && localStorage.getItem("user")){
          this.isLoggedIn = true;
        }
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = false;
    const user = this.apiService.getUser();
    if(user && user?.username) this.isLoggedIn = true;
  }

  closeDropdown() {
    this.onClose.emit(this.classList);
  }

  logout(){
    this.onLogout.emit();
  }

  login(){
    this.onLogin.emit();
  }

  signUp(){
    this.onSignUp.emit();
  }
}
