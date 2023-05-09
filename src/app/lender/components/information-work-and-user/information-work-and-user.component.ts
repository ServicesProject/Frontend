import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { WorkService } from 'src/app/lender/services/work.service'
import { saveAs } from 'file-saver'; 
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-information-work-and-user',
  templateUrl: './information-work-and-user.component.html',
  styleUrls: ['./information-work-and-user.component.css']
})
export class InformationWorkAndUserComponent implements OnInit {

  idWork
  idUser
  dataUser
  dataWork

  contract
  vigente

  //Map
  zoom = 15
  map:any
  center: google.maps.LatLngLiteral
  markerPosition: google.maps.LatLngLiteral;
  @ViewChild('map') mapElement: ElementRef

  
   //contract
   informacion: string = 'Aquí va tu información';

  constructor( 
    private route: ActivatedRoute,
    private userService: UserService,
    private workService: WorkService,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.idWork = this.route.snapshot.paramMap.get('idWork')
    this.idUser = this.route.snapshot.paramMap.get('idUser')
    this.route.queryParams.subscribe((params: Params) => {
      this.vigente = params['vigente'];
       
    });
    this.informationUser()
    this.informationWork()
 
  }

  informationUser(){
    this.userService.details(this.idUser).subscribe(
      data => {
        this.dataUser = data
      },
      err => {
        console.log(err)
      }
    )
  }

  informationWork(){
    this.workService.details(this.idWork).subscribe(
      data => {
        this.dataWork = data
        this.center = {
          lat: Number(this.dataWork.lat),
          lng: Number(this.dataWork.lng)
        };
        this.markerPosition = this.center;
      },
      err => {
        console.log(err)
      }
    )
  }

  descargar() {
    const contenido = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>Información Descargada</title>
        </head>
        <body>
          <div>${this.informacion}</div>
        </body>
      </html>`;

    const blob = new Blob(['\ufeff', contenido], {
      type: 'application/msword'
    });

    saveAs(blob, 'contrato-de-servicio.doc'); // Descarga el archivo con el nombre "informacion.doc"
  }


  controlContracts(){
    this.notificationService.listOneUserWithContracts(this.idUser, this.idWork).subscribe(
      data => {
        this.contract = data
      },
      err => {
        console.log(err)
      }
    )
  }

}
