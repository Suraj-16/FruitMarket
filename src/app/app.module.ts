import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { RegistrationPageComponent } from './Components/registration-page/registration-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddFruitComponent } from './Components/add-fruit/add-fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    CartComponent,
    OrderDetailsComponent,
    AddFruitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
