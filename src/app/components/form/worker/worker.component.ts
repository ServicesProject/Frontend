import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/models/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  job:any;
  experience: any;
  contract: any
  area: any
  address: any
  workTime: any

  constructor(
    private workService: WorkService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const work = new Work(this.job, this.experience, this.contract, this.area, this.address, this.workTime)
    this.workService.save(work).subscribe(
      data => {
        this.router.navigateByUrl('inicio/trabajador')
      },
      err => {
        console.log(" No funciona")
        
      }
    )
  }

}
