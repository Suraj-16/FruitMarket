import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { fruitDetail } from 'src/app/Models/fruitDetail';
import { FruitdetailsService } from 'src/app/Services/fruitdetails.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  constructor(private _service : FruitdetailsService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(fruitdetails : fruitDetail){
    console.log(fruitdetails);
    this._service.addFruitDetals(fruitdetails).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(["home"]);
  }
}
