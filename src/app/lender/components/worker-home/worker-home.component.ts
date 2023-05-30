import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-worker-home',
  templateUrl: './worker-home.component.html',
  styleUrls: ['./worker-home.component.css']
})
export class WorkerHomeComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0,0])
  }

}
