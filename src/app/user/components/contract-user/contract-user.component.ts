import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/lender/services/notification.service';

@Component({
  selector: 'app-contract-user',
  templateUrl: './contract-user.component.html',
  styleUrls: ['./contract-user.component.css']
})
export class ContractUserComponent implements OnInit {

  
  userData
  listNotificationWithWork

  constructor(
    private notificationService: NotificationService,
    private router: Router
    ) {}

  ngOnInit(): void {
    let user = localStorage.getItem('token')
    this.userData = JSON.parse(user);
    this.getAcceptedContract()
  }

  getAcceptedContract(){
    this.notificationService.listAcceptedContracts(this.userData.user.id).subscribe(
      data => {
        this.listNotificationWithWork = data
      },
      err => {
        console.log(err)
      }
    )
  }

  detailService(notification){
    this.router.navigateByUrl(`usuario/${notification.work.id}/trabajo`)
  }
  



}
