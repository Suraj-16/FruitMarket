import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetail } from 'src/app/Models/userDetail';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registrationForm : FormGroup;
  constructor(private _service : UserService, private router : Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
      address1: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      district: new FormControl(null, Validators.required),
      statename: new FormControl(null, Validators.required),
      pincode : new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._service.addUser(this.registrationForm.value).subscribe(data => {
      console.log(data);
    })
    this.registrationForm.reset()
    this.router.navigate(['login']);
  }
  // onSubmit(registrationForm : userDetail){
  //   console.log(registrationForm);
  //   this._service.addUser(registrationForm).subscribe(data => {
  //     console.log(data);
  //   })
  //   this.router.navigate(['login']);
  // }
}
