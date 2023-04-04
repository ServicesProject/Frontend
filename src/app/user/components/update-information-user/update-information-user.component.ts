import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UpdateUser } from '../../models/update-user';


@Component({
  selector: 'app-update-information-user',
  templateUrl: './update-information-user.component.html',
  styleUrls: ['./update-information-user.component.css']
})
export class UpdateInformationUserComponent implements OnInit {

  userData
  detailUser

  name: any;
  lastName: any;
  phone: any;
  description: any;
  gender: any;
  ci: any;
  birthdate: Date

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('token')
    this.userData = JSON.parse(user);
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
  updateInformationUser(){
    const user = new UpdateUser(this.name, this.lastName, this.phone, this.description, this.gender, this.ci, this.birthdate)
    this.userService.update(this.userData.user.id, user).subscribe();
    this.router.navigateByUrl('usuario/datosPersonales')
  }

}
