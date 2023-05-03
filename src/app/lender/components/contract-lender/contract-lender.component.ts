import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-lender',
  templateUrl: './contract-lender.component.html',
  styleUrls: ['./contract-lender.component.css']
})
export class ContractLenderComponent implements OnInit {
  userData
  listNotificationWorkUser
  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let lender = localStorage.getItem('token')
    this.userData = JSON.parse(lender);
    this.getAcceptedContract()
  }

  getAcceptedContract(){
    this.notificationService.listAcceptLenderContracts(this.userData.user.email).subscribe(
      data => {
        this.listNotificationWorkUser = data
      },
      err => {
        console.log(err)
      }
    )
  }

  detailService(notification){
    this.router.navigateByUrl(`trabajador/servicio/${notification.work.id}/solicitante/${notification.user.id}`)
  }

}
