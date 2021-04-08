import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent implements OnInit, OnDestroy {
  flag: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log('On init')
  }

  ngOnDestroy(): void{
    console.log('On destroy');
  }

}
