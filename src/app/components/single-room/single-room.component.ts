import { Component, Input, OnInit } from '@angular/core';
import { Sobe } from 'src/app/sobe/sobe.model';

@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.css']
})
export class SingleRoomComponent implements OnInit {

  @Input() soba: Sobe;

  constructor() { }

  ngOnInit(): void {
  }

}
