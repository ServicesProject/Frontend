import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[] = []

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
   this.userService.list().subscribe(
    data =>{
      this.user=data
    },
    err => {
      console.log(err)
    }
   )
   console.log(this.user)
  }
  



}

