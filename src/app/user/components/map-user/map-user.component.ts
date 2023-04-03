import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.component.html',
  styleUrls: ['./map-user.component.css']
})
export class MapUserComponent implements OnInit {
  zoom = 15
  map:any
  center: google.maps.LatLngLiteral
  
  @ViewChild('map') mapElement: ElementRef
  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

}
