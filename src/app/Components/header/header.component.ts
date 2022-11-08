import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   isLoggedIn = localStorage.getItem("isLoggedIn");

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn);
  }

  onclick(){
    localStorage.setItem("isLoggedIn", 'false');
    localStorage.removeItem("userid");
    this.router.navigate(['login']).then(() => {
      window.location.reload()
    })
  }

}
