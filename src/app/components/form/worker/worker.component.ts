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


  UpdateDataLender() {
    let info = this.tokenService.currentUserValue

    const lender = new RegisterLender(this.name, this.lastName, this.phone, this.description, this.gender)
    let work = new Work(this.job, this.experience, this.contract, this.area, this.address, this.workTime)

    this.lenderService.updateLender(info.user.email, lender).subscribe();
    let worktosend = {...work,lenderEmail:info.user.email}
    this.workService.create(worktosend).subscribe()
    
    // TAREA POTO :3
    // esperar las dos llamadas que cuando se completen se navegue a la sigiuente pagina
    // actualizar el local storage con los datos del lender actualizados una vez que el lender se termine de actualizar

    // this.lenderService.register(lender).subscribe(
    //   data => {
    //     this.router.navigateByUrl('inicio/trabajador')
    //   },
    //   err => {
    //     console.log(" No funciona")
        
    //   }
    // )
  }


  

}
