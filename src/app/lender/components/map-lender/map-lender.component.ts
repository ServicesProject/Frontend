import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map-lender',
  templateUrl: './map-lender.component.html',
  styleUrls: ['./map-lender.component.css']
})
export class MapLenderComponent implements OnInit {

  workList
  
  category
  contract
  workTime
  experience
  area
 
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
      if (this.mapElement?.nativeElement) {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: this.zoom,
          center: this.center,
        });
      }
    });
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
      // let filteredworksbyradius = this.filterByMap(resp)
      
      // this.workList=filteredworksbyradius
      this.workList= this.convertJStoLatleng(resp)
      console.log(this.workList);
    })
  }
  filterByMap(works) {

  }

}
