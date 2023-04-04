import { Component, OnInit } from '@angular/core';
import { LenderService } from '../../services/lender.service';
import { RegisterLender } from '../../models/registerLender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-information-lender',
  templateUrl: './update-information-lender.component.html',
  styleUrls: ['./update-information-lender.component.css']
})
export class UpdateInformationLenderComponent implements OnInit {

  lenderData
  detailLender

  name: any;
  lastName: any;
  phone: any;
  description: any;
  gender: any;
  ci: any;
  birthdate: Date

  constructor(
    private lenderService: LenderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let lender = localStorage.getItem('token')
    this.lenderData = JSON.parse(lender)
    this.informationLender()
  }

  informationLender(){
    this.lenderService.getOneLender(this.lenderData.user.id).subscribe(
      data => {
        this.detailLender = data
      },
      err => {
        console.log(err)
      }
    )
  }

  updateInformationLender(){
    const lender = new RegisterLender(this.name, this.lastName, this.phone, this.description, this.gender, this.ci, this.birthdate)
    this.lenderService.updateLender(this.lenderData.user.email, lender).subscribe();
    this.router.navigateByUrl('trabajador/datosPersonales')
  }

}
