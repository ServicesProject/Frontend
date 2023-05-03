import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { WorkService } from 'src/app/lender/services/work.service'

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

  //Map
  zoom = 15
  map:any
  center: google.maps.LatLngLiteral
  markerPosition: google.maps.LatLngLiteral;
  @ViewChild('map') mapElement: ElementRef

  constructor( 
    private route: ActivatedRoute,
    private userService: UserService,
    private workService: WorkService
    ) { }

  ngOnInit(): void {
    this.idWork = this.route.snapshot.paramMap.get('idWork')
    this.idUser = this.route.snapshot.paramMap.get('idUser')

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
      },
      err => {
        console.log(err)
      }
    )
  }

}
