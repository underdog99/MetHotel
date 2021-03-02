import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Sobe } from './sobe.model';

@Component({
  selector: 'app-sobe',
  templateUrl: './sobe.component.html',
  styleUrls: ['./sobe.component.css']
})
export class SobeComponent implements OnInit {

  @Input() soba: Sobe;
  @Output() sobaBrisanje: EventEmitter<Sobe>;
  @Output() sobaUpdate: EventEmitter<Sobe>;

  constructor() {
    this.sobaUpdate = new EventEmitter();
    this.sobaBrisanje = new EventEmitter();
   }

  ngOnInit(): void {
  }

  public deleteSoba(): void{
    this.sobaBrisanje.emit(this.soba);
  }

  public updateSoba(): void{
    this.sobaUpdate.emit(this.soba);
  }

}
