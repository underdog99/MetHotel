import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {

  @Input('name') name: string;
  @Input('comment') comment: string;

  constructor() { }

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    console.log('Promenjeno je: ', changes);
  }

}
