import { Component, OnInit } from '@angular/core';
import { LenderService } from '../../services/lender.service';

@Component({
  selector: 'app-information-lender',
  templateUrl: './information-lender.component.html',
  styleUrls: ['./information-lender.component.css']
})
export class InformationLenderComponent implements OnInit {

  userData
  detailLender

  constructor(
    private lenderService: LenderService
  ) { }

  ngOnInit(): void {
    let lender = localStorage.getItem('token')
    this.userData = JSON.parse(lender);
    this.informationLender()
  }

  informationLender(){
    this.lenderService.getOneLender(this.userData.user.id).subscribe(
      data => {
        this.detailLender = data
      },
      err => {
        console.log(err)
      }
    )
  }

}
