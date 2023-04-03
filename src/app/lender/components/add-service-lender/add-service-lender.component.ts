import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { Work } from '../../models/work';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-add-service-lender',
  templateUrl: './add-service-lender.component.html',
  styleUrls: ['./add-service-lender.component.css']
})
export class AddServiceLenderComponent implements OnInit {

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

  public form!: FormGroup

   //Map
   zoom = 15
   map:any
   center: google.maps.LatLngLiteral
   markerPosition: google.maps.LatLngLiteral;
   @ViewChild('map') mapElement: ElementRef

  constructor(
    
    private workService: WorkService,
    private router: Router,
    private tokenService: TokenService,
    
  ) { }

  ngOnInit(): void {
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

  UpdateDataLender() {
    let info = this.tokenService.currentUserValue

    
    let work = new Work(this.job, this.experience, this.contract, this.area, this.address, this.workTime, this.category, this.salary, this.lat, this.lng)

    
    let worktosend = {...work,lenderEmail:info.user.email}
    this.workService.create(worktosend).subscribe()
    
   
  }



}
