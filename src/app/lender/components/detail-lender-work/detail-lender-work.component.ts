import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from '../../services/work.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-detail-lender-work',
  templateUrl: './detail-lender-work.component.html',
  styleUrls: ['./detail-lender-work.component.css']
})
export class DetailLenderWorkComponent implements OnInit {
  idWork
  information

  userId
  workId
  lenderEmail
  state
 
  userData

   //Map
   zoom = 15
   map:any
   center: google.maps.LatLngLiteral
   markerPosition: google.maps.LatLngLiteral;
   @ViewChild('map') mapElement: ElementRef
 
   @ViewChild('mapa') mapa: any;

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('token')
    this.userData = JSON.parse(user)
    this.idWork = this.route.snapshot.paramMap.get('id')
    this.informationLenderWork()
  }

  informationLenderWork(){
    this.workService.getWorkwithLender(this.idWork).subscribe(
      data => {
        this.information = data
      },
      err => {
        console.log(err)
      }
    )
  }

  sendRequest(){
   let message = `El usuario ${this.userData.user.name} ${this.userData.user.lastName} requiere tu servicio `
   const notificacion = { message: message, workId: this.idWork, userId: this.userData.user.id, lenderEmail: this.information.lender.email, state: 'pendiente'};
   this.notificationService.sendNotification(notificacion).subscribe()
    
  }

}
