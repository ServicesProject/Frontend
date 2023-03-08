import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})
export class LenderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {

    const btn: HTMLElement | null = document.querySelector("#btn");
    const sidebar: HTMLElement | null = document.querySelector(".sidebar");

    if (btn && sidebar) {
      btn.onclick = () => {
        sidebar.classList.toggle("active");
      };
    }

  }

}

