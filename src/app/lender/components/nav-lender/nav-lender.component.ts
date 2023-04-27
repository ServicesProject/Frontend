import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification';


@Component({
  selector: 'app-nav-lender',
  templateUrl: './nav-lender.component.html',
  styleUrls: ['./nav-lender.component.css']
})
export class NavLenderComponent implements OnInit {

  data
  detailNotification

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    let value = localStorage.getItem('token');
     this.data = JSON.parse(value)
     this.informationNotifications()
  }

  async cerrarSesion(){
    await localStorage.clear()
    this.router.navigateByUrl("")
  }

  informationNotifications(){
    this.notificationService.lisLenderNotification(this.data.user.email).subscribe(
      data => {
        this.detailNotification = data
      },
      err => {
        console.log(err)
      }
    )
  }

  aceptNotification(notification){
    this.notificationService.changeState(notification.id, 'aceptado', `El contratista ${this.data.user.name} ${this.data.user.lastName} ha aceptado el trabajo`).subscribe(
      data => {
        this.detailNotification = this.detailNotification.filter(notice => notice.id !== notification.id)
      },
      err => {
        console.log(err)
      }
    );
  }

  rejectNotification(notification){
    this.notificationService.changeState(notification.id, 'rechazado', `El contratista ${this.data.user.name} ${this.data.user.lastName} ha rechazado el trabajo`).subscribe(
      data => {
        this.detailNotification = this.detailNotification.filter(notice => notice.id !== notification.id)
      },
      err => {
        console.log(err)
      }
    );
  }

}
