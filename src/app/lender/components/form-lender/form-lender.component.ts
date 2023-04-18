import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterLender } from 'src/app/lender/models/registerLender';
import { Work } from 'src/app/lender/models/work';
import { LenderService } from 'src/app/lender/services/lender.service';
import { TokenService } from 'src/app/core/services/token.service';
import { WorkService } from 'src/app/lender/services/work.service';
import { forkJoin, tap } from 'rxjs';

@Component({
  selector: 'app-form-lender',
  templateUrl: './form-lender.component.html',
  styleUrls: ['./form-lender.component.css']
})
export class FormLenderComponent implements OnInit {

  name: any;
  lastName: any;
  phone: any;
  
  gender: any;
  ci: any;
  birthdate: Date

  job:any;
  experience: any;
  contract: any
  area: any
  address: any
  workTime: any
  category: string
  salary: string
  description: any

  lat
  lng

  

  //Map
  zoom = 15
  map:any
  center: google.maps.LatLngLiteral
  markerPosition: google.maps.LatLngLiteral;
  @ViewChild('map') mapElement: ElementRef

  constructor(
    private lenderService: LenderService,
    private workService: WorkService,
    private router: Router,
    private tokenService: TokenService
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
    const lender = new RegisterLender(this.name, this.lastName, this.phone, this.description, this.gender, this.ci, this.birthdate)
    lender.complete=true
    let work = new Work(this.job, this.experience, this.contract, this.area, this.address, this.workTime, this.category,this.description, this.salary, this.lat, this.lng)
    let worktosend = {...work,lenderEmail:info.user.email}
    forkJoin([this.lenderService.updateLender(info.user.email, lender), this.workService.create(worktosend)])
    .pipe(
      tap(() => {
        this.router.navigateByUrl('trabajador');
      })
    )
    .subscribe();
    
  }
  
 

}
