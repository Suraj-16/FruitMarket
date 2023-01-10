import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartDetail } from 'src/app/Models/cartDetail';
import { fruitDetail } from 'src/app/Models/fruitDetail';
import { CartdetailsService } from 'src/app/Services/cartdetails.service';
import { FruitdetailsService } from 'src/app/Services/fruitdetails.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //  fruitList : {
  //   name: string;
  //   img: string;
  //   price: Number;
  //   des: string;
  // }[] =[
  //   {"name": "Apple", "img": "https://media.istockphoto.com/photos/many-red-apples-on-cement-background-top-view-autumn-pattern-with-picture-id1345346103?b=1&k=20&m=1345346103&s=170667a&w=0&h=ApcEM9lCHe8WgbFQPNQVG4Helw39Zl1Am39mVcTSroY=", "price": 200, "des": ""},
  //   {"name": "Banana", "img": "data:image/jpeg;base64,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", "price": 10, "des": ""},
  //   {"name": "Guava", "img": "", "price": 20, "des": ""},
  //   {"name": "Orange", "img": "", "price": 100, "des": ""},
  //   {"name": "Papaya", "img": "", "price": 400, "des": ""},
  //   {"name": "Kiwi", "img": "", "price": 50, "des": ""},
  // ];

  fruitList : fruitDetail[] = [];
  test: any = ''

  constructor(private _service : FruitdetailsService, private _service2 : CartdetailsService, private router : Router, private toast : NgToastService) { }

  quantity = 1;

  cartItem : cartDetail = {
    fruitid : 0,
    userid : 0,
    qty : 0,
    isremoved : true
  }

  ngOnInit(): void {
    this._service.getFruitDetails().subscribe(data => {
      this.fruitList = data;
    })
  }



  addToCart(fruitid : number){
    if(localStorage.getItem("isLoggedIn") == "true"){
      if(this.quantity >= 1){
        this.cartItem.fruitid = fruitid;
      this.cartItem.userid = Number(localStorage.getItem("userid"));
      this.cartItem.qty = this.quantity;
      this.cartItem.isremoved = false;

      this._service2.addFruitToCart(this.cartItem).subscribe(
        (res) => {
        this.toast.success({detail:"Fruit Added to Cart", summary:"Success Message", duration: 2000});
        this.quantity = 1;
      },(error) => {
        console.log(error);
      })
      }else{
        this.toast.error({detail:"Quantity should be greater than 0", summary: "Error Message", duration: 2000});
      }
    }else{
      this.router.navigate(['login']);
    }
    }

}
