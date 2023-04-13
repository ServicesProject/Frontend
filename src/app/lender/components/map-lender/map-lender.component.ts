import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { LenderService } from '../../services/lender.service';
import { FilterWorks } from '../../models/filterWorks';

@Component({
  selector: 'app-map-lender',
  templateUrl: './map-lender.component.html',
  styleUrls: ['./map-lender.component.css']
})
export class MapLenderComponent implements OnInit {

  workList
  lenders

  category
  contract
  workTime
  experience
  area
 
  zoom = 15
  map:any
  center: google.maps.LatLngLiteral
  radius = 1000
  
  @ViewChild('map') mapElement: ElementRef
  constructor(
    private workService: WorkService
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

  filterWorks(){
    console.log(this.category);
    let worktoSend = {}
    if(this.area){
      worktoSend = {...worktoSend, area:this.area}
    }

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
  
    this.workService.FilterWorksintheMap(worktoSend).subscribe(resp=> this.workList=resp)
    console.log(this.workList);
    
  }

}
