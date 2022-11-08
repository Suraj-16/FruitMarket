import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddFruitComponent } from "./Components/add-fruit/add-fruit.component";
import { CartComponent } from "./Components/cart/cart.component";
import { HomePageComponent } from "./Components/home-page/home-page.component";
import { LoginPageComponent } from "./Components/login-page/login-page.component";
import { OrderDetailsComponent } from "./Components/order-details/order-details.component";
import { RegistrationPageComponent } from "./Components/registration-page/registration-page.component";

const routes : Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'orders', component: OrderDetailsComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: 'add', component: AddFruitComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
