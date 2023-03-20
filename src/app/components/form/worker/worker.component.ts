import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterLender } from 'src/app/models/registerLender';
import { Work } from 'src/app/models/work';
import { LenderService } from 'src/app/services/lender.service';
import { TokenService } from 'src/app/services/token.service';
import { WorkService } from 'src/app/services/work.service';
import { GoogleMap, MapMarker } from '@angular/google-maps';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  name: any;
  lastName: any;
  phone: any;
  description: any;
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
    console.log(this.markerPosition);
    this.lat = this.markerPosition.lat
    this.lng = this.markerPosition.lng

  }


  UpdateDataLender() {
    let info = this.tokenService.currentUserValue

    const lender = new RegisterLender(this.name, this.lastName, this.phone, this.description, this.gender, this.ci, this.birthdate)
    let work = new Work(this.job, this.experience, this.contract, this.area, this.address, this.workTime, this.category, this.salary, this.lat, this.lng)

    this.lenderService.updateLender(info.user.email, lender).subscribe();
    let worktosend = {...work,lenderEmail:info.user.email}
    this.workService.create(worktosend).subscribe()
    
    // TAREA POTO :3
    // esperar las dos llamadas que cuando se completen se navegue a la sigiuente pagina
    // actualizar el local storage con los datos del lender actualizados una vez que el lender se termine de actualizar

    // this.lenderService.register(lender).subscribe(
    //   data => {
    //     this.router.navigateByUrl('inicio/trabajador')
    //   },
    //   err => {
    //     console.log(" No funciona")
        
    //   }
    // )
  }


  

}
