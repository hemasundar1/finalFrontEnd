import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaremployee',
  templateUrl: './navbaremployee.component.html',
  styleUrls: ['./navbaremployee.component.css']
})
export class NavbaremployeeComponent implements OnInit {

  value:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.value=window.confirm("Do you want to LogOut ?");
    if(this.value==true)
    {
      this.router.navigate(['login']);
    }
  } 

}
