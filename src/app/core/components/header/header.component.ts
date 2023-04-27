import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

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

  }
}
