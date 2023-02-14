import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BannerComponent } from './mainpage/banner/banner.component';
import { CardL2Component } from './mainpage/card-l2/card-l2.component';
import { CardL3Component } from './mainpage/card-l3/card-l3.component';
import { CardL4Component } from './mainpage/card-l4/card-l4.component';
import { CardsC3Component } from './mainpage/cards-c3/cards-c3.component';
import { CardsC2Component } from './mainpage/cards-c2/cards-c2.component';
import { DropdownComponent } from './core/dropdown/dropdown.component';
import { ProductsComponent } from './products/products.component';
import { ItemboxComponent } from './itembox/itembox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    MainpageComponent,
    BannerComponent,
    CardL2Component,
    CardL3Component,
    CardL4Component,
    CardsC3Component,
    CardsC2Component,
    DropdownComponent,
    ProductsComponent,
    ItemboxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
