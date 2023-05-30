import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/lender/services/notification.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  data
  detailNotification
  times
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    let value = localStorage.getItem('token');
     this.data = JSON.parse(value)
     this.times=setInterval(()=>{
      this.informationNotifications()
    },5000)
  }

  ngOnDestroy(){
    if(this.times){
      console.log('entra');
      
      this.times.unsusbcribe()
    }
  }

  async cerrarSesion(){
    await localStorage.clear()
    this.router.navigateByUrl("")
  }

  informationNotifications(){
    this.notificationService.listUserNotification(this.data.user.id).subscribe(
      data => {
        this.detailNotification = data
      },
      err => {
        console.log(err)
      }
    )
  }

  Notification(notification){
    this.notificationService.changeState(notification.id, 'recibido', 'Ambas partes estan de acuerdo').subscribe(
      data => {
        this.detailNotification = this.detailNotification.filter(notice => notice.id !== notification.id)
      },
      err => {
        console.log(err)
      }
    );
  }

}
