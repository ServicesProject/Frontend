import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { LenderService } from '../../services/lender.service';

@Component({
  selector: 'app-map-lender',
  templateUrl: './map-lender.component.html',
  styleUrls: ['./map-lender.component.css']
})
export class MapLenderComponent implements OnInit {

  workList
  lenders
 
  zoom = 15
  map:any
  center: google.maps.LatLngLiteral
  
  @ViewChild('map') mapElement: ElementRef
  constructor(
    private workService: WorkService,
    private lenderService: LenderService
  ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    this.getAllWork()
    
  }

  getAllWork(){
    this.workService.list().subscribe(
      data => {
        this.workList = data
      },
      err => {
        console.log(err)
      }
    )
  }

  // getAllLenders(){
  //   this.lenderService.getAllLenders().subscribe(
  //     data => {
  //       this.lenders = data
  //     },
  //     err => {
  //       console.log(err)
  //     }
  //   )
  // }

}
