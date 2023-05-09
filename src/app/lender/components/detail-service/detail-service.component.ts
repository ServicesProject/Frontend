import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from '../../services/work.service';
import { RatingService } from 'src/app/user/services/rating.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {

  idWork
  detailWork

  //Map
  zoom = 15
  map:any
  center: google.maps.LatLngLiteral
  markerPosition: google.maps.LatLngLiteral;
  @ViewChild('map') mapElement: ElementRef

  //rating
  poinsOnetWork
  messagesUser

  @ViewChild('mapa') mapa: any;

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private router: Router,
    private ratingService: RatingService
  ) {}

  async ngOnInit() {
    this.idWork = this.route.snapshot.paramMap.get('id')
    this.informationService()
    await this.ratingService.averagePointsForWork(this.idWork).subscribe(result => {
      this.poinsOnetWork = result;
    });
    await this.messagesFromUsers()
  }

  informationService(){
    this.workService.details(this.idWork).subscribe(
      data => {
        this.detailWork = data
        this.center = {
          lat: Number(this.detailWork.lat),
          lng: Number(this.detailWork.lng)
        };
        this.markerPosition = this.center; 
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteService(){
    this.workService.deleteWork(this.idWork).subscribe()
    this.router.navigateByUrl("trabajador/administración")
  }

  updateService(){
    this.router.navigateByUrl(`trabajador/${this.detailWork.id}/actualizarServicio`)
  }

  messagesFromUsers(){
    this.ratingService.messagesForWork(this.idWork).subscribe(
      data => {
        this.messagesUser = data
      },
      err => {
        console.log(err)
      }
    )
  }
  

}