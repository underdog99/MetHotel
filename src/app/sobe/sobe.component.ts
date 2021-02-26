import { Component, Input, OnInit } from '@angular/core';
import { Sobe } from './sobe.model';

@Component({
  selector: 'app-sobe',
  templateUrl: './sobe.component.html',
  styleUrls: ['./sobe.component.css']
})
export class SobeComponent implements OnInit {

  @Input() soba: Sobe;

  constructor() {
   }

  ngOnInit(): void {
  }

}
