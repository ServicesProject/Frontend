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
  description: any;
  lat
  lng

  jobs =  {
    'Vehículo': ['Mécanico', 'Chofer'],
    'Domicilio': ['Cocinero', 'Jardinero', 'Limpieza'],
    'Cuidado personal': ['Enfermero', 'Niñero', 'Cuidador de mascotas'],
    'Reparación': ['Electricista', 'Cerrajero', 'Fontanero', 'Plomero'],
    'Construcción': ['Albañil', 'Carpintero', 'Pintor'],
    'Vestimenta': ['Sastre', 'Costurero'],
    'Enseñanza': ['Tutor']
  };
  categorySelected

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
    if (this.jobs && this.jobs[0]) {
      this.job = this.jobs[0].value;
    }

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
      
        this.job = this.jobs[this.detailWork.category]?.find((job) => job === this.detailWork.job);
        this.category = this.detailWork.category
        this.area = this.detailWork.area
        this.address = this.detailWork.address
        this.contract = this.detailWork.contract
        this.salary = this.detailWork.salary
        this.workTime = this.detailWork.workTime
        this.experience = this.detailWork.experience
        this.description = this.detailWork.description
        this.salary = this.detailWork.salary
        this.lat = this.detailWork.lat
        this.lng = this.detailWork.lng
        
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


  UpdateWorkLender() {
    let lenderWork = new Work(this.job, this.experience, this.contract, this.area, this.address, this.workTime, this.category,this.salary,this.description,this.lat, this.lng)
    console.log(lenderWork);
    
    this.workService.update(this.idWork,lenderWork).subscribe();
    
  }

  updateData(){
    this.router.navigateByUrl(`trabajador/${this.idWork}/detalleServicio`);
  }

}
