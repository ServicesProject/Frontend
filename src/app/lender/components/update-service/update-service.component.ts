import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from '../../services/work.service';
import { Work } from '../../models/work';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  job:any;
  experience: any;
  contract: any
  area: any
  address: any
  workTime: any
  category: string
  salary: string
  lat
  lng

  idWork
  detailWork

   //Map
   zoom = 15
   map:any
   center: google.maps.LatLngLiteral
   markerPosition: google.maps.LatLngLiteral;
   @ViewChild('map') mapElement: ElementRef

  constructor(
    private workService: WorkService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.idWork = this.route.snapshot.paramMap.get('id')
    this.informationService()
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  onMapClick(event) {
    this.markerPosition = event.latLng.toJSON();
     
    this.lat = this.markerPosition.lat
    this.lng = this.markerPosition.lng

  }

  informationService(){
    this.workService.details(this.idWork).subscribe(
      data => {
        this.detailWork = data
        console.log(this.detailWork);
        
        this.center = {
          lat: Number(this.detailWork.lat),
          lng: Number(this.detailWork.lng)
        };
        
      },
      err => {
        console.log(err)
      }
    )
  }


  UpdateWorkLender() {
    let lenderWork = new Work(this.job, this.experience, this.contract, this.area, this.address, this.workTime, this.category, this.salary, this.lat, this.lng)
    this.workService.update(this.idWork,lenderWork).subscribe();
    
  }

}
