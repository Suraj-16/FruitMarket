import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartItem } from 'src/app/Models/cartItem';
import { CartdetailsService } from 'src/app/Services/cartdetails.service';
import { NgToastService } from 'ng-angular-popup';
import { OrderdetailsService } from 'src/app/Services/orderdetails.service';
import { orderDetail } from 'src/app/Models/orderDetail';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemList : cartItem[] = [];
  totalPrice : number = 0;
  isEmpty = false
  orderitem : orderDetail;

  j = 0
  constructor(private router : Router, private _service : CartdetailsService, private toast : NgToastService, private _service2 : OrderdetailsService) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn") == "true"){
      this.getCartItems();

    }else{
      this.router.navigate(['login']);
    }
    console.log(this.cartItemList);
  }

  removeFromCart(cartid : number){
    this._service.removeCartItem(cartid).subscribe(data => {
      this.totalPrice = 0
      this.getCartItems();
      this.toast.success({detail: "Removed from Cart", summary: "Success Message", duration: 5000});
    })


  }
  getCartItems(){
    this._service.displayCartItems(Number(localStorage.getItem("userid"))).subscribe(data => {
      this.cartItemList = data;
      this.j = 0
      for(var i of data){
        this.totalPrice = this.totalPrice + (i.fruitprice * i.qty);
      }
    })
  }

  placeOrder(){
    for(var i in this.cartItemList){
      this._service.getCartItem(this.cartItemList[i].cartid).subscribe(res => {
          console.log(res);
          this._service2.addOrderItem(res).subscribe(data => {
            console.log();
          })
      });

      this._service.removeCartItem(this.cartItemList[i].cartid).subscribe(res => {
        this.getCartItems();
        console.log(res);
      });
    }
  }
}
