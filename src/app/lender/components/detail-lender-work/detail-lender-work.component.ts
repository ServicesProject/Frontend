import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-detail-lender-work',
  templateUrl: './detail-lender-work.component.html',
  styleUrls: ['./detail-lender-work.component.css']
})
export class DetailLenderWorkComponent implements OnInit {
  idWork
  information

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
  ) { }

  ngOnInit(): void {
    this.idWork = this.route.snapshot.paramMap.get('id')
    this.informationLenderWork()
  }

  informationLenderWork(){
    this.workService.getWorkwithLender(this.idWork).subscribe(
      data => {
        this.information = data
      },
      err => {
        console.log(err)
      }
    )
  }

}
