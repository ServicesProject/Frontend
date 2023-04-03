import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-service-lender',
  templateUrl: './manage-service-lender.component.html',
  styleUrls: ['./manage-service-lender.component.css']
})
export class ManageServiceLenderComponent implements OnInit {

  userData
  workList

  constructor(
    private workService: WorkService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    let lender = localStorage.getItem('token')
    this.userData = JSON.parse(lender);
    console.log(this.userData);
    this.getLenderServices()

  }

  getLenderServices(){
     this.workService.getLenderWorks(this.userData.user.id).subscribe(
      data => {
        this.workList = data
      },
      err => {
        console.log(err)
      }
    )
  }

  detailService(work){
    console.log(work);
    this.router.navigateByUrl(`trabajador/${work.id}/detalleServicio`)
  }

}
