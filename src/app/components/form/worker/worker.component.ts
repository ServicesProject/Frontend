import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lender } from 'src/app/models/lender';
import { RegisterLender } from 'src/app/models/registerLender';
import { Work } from 'src/app/models/work';
import { LenderService } from 'src/app/services/lender.service';
import { TokenService } from 'src/app/services/token.service';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  name: any;
  lastName: any;
  phone: any;
  description: any;
  gender: any;



  job:any;
  experience: any;
  contract: any
  area: any
  address: any
  workTime: any

  constructor(
    private lenderService: LenderService,
    private workService: WorkService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    let info = this.tokenService.currentUserValue

    const lender = new RegisterLender
   
    
    this.lenderService.register(lender).subscribe(
      data => {
        this.router.navigateByUrl('inicio/trabajador')
      },
      err => {
        console.log(" No funciona")
        
      }
    )
  }

}
