import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WorkService } from 'src/app/lender/services/work.service';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.component.html',
  styleUrls: ['./map-user.component.css']
})
export class MapUserComponent implements OnInit {

  workList
  lenders

  category
  contract
  workTime
  experience
  

  zoom = 15
  map: google.maps.Map;
  radius: number;
  circle: google.maps.Circle;
  center: google.maps.LatLngLiteral
  distance
  
  
  @ViewChild('map') mapElement: ElementRef
  constructor(
    private workService: WorkService,
    private router: Router
  ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    if (this.mapElement?.nativeElement) {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: this.zoom,
        center: this.center,
      });
    }
    this.getAllWork()
  }

  convertJStoLatleng(works){
    let worklist = []
    let ubication: google.maps.LatLngLiteral
    works.forEach(element => {
      ubication = {lat:parseFloat(element.lat), lng:parseFloat(element.lng)}
      let worktoSave = {... element, ubication: ubication  }
      worklist.push(worktoSave)
    });
    return worklist
  }

  setRadius() {
    if (this.circle) {
      this.circle.setMap(null);
    }
    this.radius = this.distance;
    this.circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      center: this.center,
      radius: this.radius,
      map: this.map,
      draggable: true,
    });

    // Agregar controladores de eventos para permitir que el usuario arrastre y cambie el radio del círculo
    google.maps.event.addListener(this.circle, "center_changed", () => {
      this.center = this.circle.getCenter().toJSON();
    });

    google.maps.event.addListener(this.circle, "radius_changed", () => {
      this.radius = this.circle.getRadius();
    });
    //llamar a filteredWorks :) tam poto
  }


  getAllWork(){
    this.workService.list().subscribe(
      data => {
        this.workList = this.convertJStoLatleng(data)
      },
      err => {
        console.log(err)
      }
    )
  }

  detailLenderWork(work){
    this.router.navigateByUrl(`trabajador/${work.id}/trabajo`)
  }


  filterWorks(){
    
    let worktoSend = {}
    
    if(this.experience){
      worktoSend = {...worktoSend, experience:this.experience}
    }

    if(this.workTime){
      worktoSend = {...worktoSend, workTime:this.workTime}
    }

    if(this.contract){
      worktoSend = {...worktoSend, contract:this.contract}
    }

    if(this.category){
      worktoSend = {...worktoSend, category:this.category}
    }
  
    this.workService.FilterWorksintheMap(worktoSend).subscribe(resp=> {
      let worklist= this.convertJStoLatleng(resp)
       this.workList = this.filterByMap(worklist)
      
      console.log(this.workList);
    })
  }

  filterByMap(workList) {
    const filteredList = [];
    const R = 6371e3; // radio de la Tierra en metros
  
    for (const work of workList) {
      const lat1 = this.center.lat;
      const lon1 = this.center.lng;
      const lat2 = work.ubication.lat;
      const lon2 = work.ubication.lng;
  
      const φ1 = lat1 * Math.PI / 180; // convertir latitud a radianes
      const φ2 = lat2 * Math.PI / 180;
      const Δφ = (lat2 - lat1) * Math.PI / 180;
      const Δλ = (lon2 - lon1) * Math.PI / 180;
  
      const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      const d = R * c; // distancia en metros
  
      if (d <= this.radius) {
        filteredList.push(work);
      }
    }
  
    // actualiza la lista de trabajos en el mapa con la lista filtrada
    return filteredList
  }

}
