import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private _service : UserService, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this._service.loginUser(this.loginForm.value).subscribe(data => {
      console.log(data);
      if(data){
        localStorage.setItem("userid", data.userid);
        localStorage.setItem("isLoggedIn", 'true');
        this.loginForm.reset();
        this.router.navigate(['home']).then(() => {
          window.location.reload()
        })
        console.log("login Working");
      }else{
        this.loginForm.reset();
        console.log("login failed");
      }
    })
  }

}
