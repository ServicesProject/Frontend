import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-lender',
  templateUrl: './nav-lender.component.html',
  styleUrls: ['./nav-lender.component.css']
})
export class NavLenderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    const value = localStorage.getItem('token');
    const data = JSON.parse(value)
  }

  async cerrarSesion(){
    await localStorage.clear()
    this.router.navigateByUrl("")
  }

}
