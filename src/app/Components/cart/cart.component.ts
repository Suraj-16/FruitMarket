import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartItem } from 'src/app/Models/cartItem';
import { CartdetailsService } from 'src/app/Services/cartdetails.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemList : cartItem[] = [];
  totalPrice : number = 0;

  constructor(private router : Router, private _service : CartdetailsService) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn") == "true"){
      this._service.displayCartItems(Number(localStorage.getItem("userid"))).subscribe(data => {
        this.cartItemList = data;
        for(var i of data){
          this.totalPrice = this.totalPrice + (i.fruitprice * i.qty);
        }
        console.log(this.totalPrice);
      })
    }else{
      this.router.navigate(['login']);
    }
  }

}
