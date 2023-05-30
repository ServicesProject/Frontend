import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    this.data = JSON.parse(token);
    if(this.data.user.rol === 'user'){
      this.router.navigateByUrl("usuario")
    }
    if(this.data.user.rol === 'worker'){
      this.router.navigateByUrl("trabajador")
    }
  }

 

}
