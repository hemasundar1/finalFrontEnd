import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  value:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.value=window.confirm("DO you want to logOut :] ?");
    if(this.value==true){
    this.router.navigate(['login']);}
  }


}
