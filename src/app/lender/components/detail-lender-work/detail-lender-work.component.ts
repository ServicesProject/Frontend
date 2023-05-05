import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WorkService } from '../../services/work.service';
import { NotificationService } from '../../services/notification.service';
import { RatingService } from 'src/app/user/services/rating.service';
import { Rating } from 'src/app/user/models/rating';


@Component({
  selector: 'app-detail-lender-work',
  templateUrl: './detail-lender-work.component.html',
  styleUrls: ['./detail-lender-work.component.css']
})
export class DetailLenderWorkComponent implements OnInit {
  idWork
  information
  contract
  vigente

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

   //rating
   message
   point = 0
   poinsOnetWork


  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private notificationService: NotificationService,
    private ratingService: RatingService
    
  ) { }

  async ngOnInit() {
    let user = localStorage.getItem('token')
    this.userData = JSON.parse(user)
    this.route.queryParams.subscribe((params: Params) => {
      this.vigente = params['vigente'];
       
    });
    
    this.idWork = this.route.snapshot.paramMap.get('id')
    await this.informationLenderWork()
    await this.controlContracts()

    await this.ratingService.averagePointsForWork(this.idWork).subscribe(result => {
      this.poinsOnetWork = result;
    });

    
  
  }

  updateRating(event: any) {
    this.point = event.rating;
  }
  
  informationLenderWork(){
    this.workService.getWorkwithLender(this.idWork).subscribe(
      data => {
        this.information = data
        this.center = {
          lat: Number(this.information?.lat),
          lng: Number(this.information?.lng)
        };
        this.markerPosition = this.center;
      },
      err => {
        console.log(err)
      }
    )
  }

  sendRequest(){
   let message = `El usuario ${this.userData.user.name} ${this.userData.user.lastName} requiere tu servicio de ${this.information.job}`
   const notificacion = { message: message, workId: this.idWork, userId: this.userData.user.id, lenderEmail: this.information.lender.email, state: 'pendiente'};
   this.notificationService.sendNotification(notificacion).subscribe()
  }

  controlContracts(){
    this.notificationService.listOneUserWithContracts(this.userData.user.id, this.idWork).subscribe(
      data => {
        this.contract = data
      },
      err => {
        console.log(err)
      }
    )
  }

  endContract(){
    this.notificationService.changeState(this.contract.id, 'terminado', `El trabajo finalizo`).subscribe(
      data => {
        this.contract = data
      },
      err => {
        console.log(err)
      }
    );

    let rating = new Rating(this.userData.user.id, this.information.id, this.point, this.message)
    this.ratingService.createRating(rating).subscribe()
  }

  addRating(){
    let rating = new Rating(this.userData.user.id, this.information.id, this.point, this.message)
    this.ratingService.createRating(rating).subscribe()
  }

 
  



}
