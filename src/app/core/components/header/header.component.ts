import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged:any
  buttonLabel = ''
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.getLabel();
  }

  // getLabel(){
  //   if(this.tokenService.currentUserValue)
  //   {
  //     this.buttonLabel = 'Cerrar Sesión'
  //     return  'Cerrar Sesión'
  //   }
  //   this.buttonLabel = 'Iniciar Sesión'
  //   return 'Iniciar Sesión'
  // }

  // control(){
  //   if(this.buttonLabel === 'Iniciar Sesión'){
  //     this.router.navigateByUrl('iniciarSesion')
  //   }
  //   else{
  //     localStorage.clear()
  //     this.router.navigateByUrl('/')
  //   }
  // }

}
