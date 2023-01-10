import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderItem } from 'src/app/Models/orderItem';
import { OrderdetailsService } from 'src/app/Services/orderdetails.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  j = 0

  orderList : orderItem[] = [];
  constructor(private router : Router, private _service : OrderdetailsService) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn") == "true"){
      this.getOrderedItems();
    }else{
      this.router.navigate(['login']);
    }
  }

  getOrderedItems(){
    this._service.displayOrederItem(Number(localStorage.getItem("userid"))).subscribe(res => {
      this.orderList = res;
    })
  }

  onClick(orderid : number){
    this._service.cancelOrder(orderid).subscribe(res => {
      this.getOrderedItems();
      console.log(res);
    })
  }
}
