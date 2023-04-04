import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-information-user',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.css']
})
export class InformationUserComponent implements OnInit {

  userData
  detailUser

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let lender = localStorage.getItem('token')
    this.userData = JSON.parse(lender);
    this.informationUser()
  }

  informationUser(){
    this.userService.details(this.userData.user.id).subscribe(
      data => {
        this.detailUser = data
      },
      err => {
        console.log(err)
      }
    )
  }

}
