import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

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
