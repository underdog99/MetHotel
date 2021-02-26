import { Component } from '@angular/core';
import { Sobe } from './sobe/sobe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sobeNiz: Sobe[];

  constructor(){
    this.sobeNiz = [
      new Sobe(
        'Soba 1',
        '1 - krevet',
        2,
        'Soba sa jednim krevetom na drugom spratu',
        2000
      ),
      new Sobe(
        'Soba 2',
        '1 - krevet',
        3,
        'Soba sa jednim krevetom na drugom spratu',
        2000
      ),
      new Sobe(
        'Soba 3',
        '2 - krevet',
        2,
        'Soba sa jednim krevetom na drugom spratu',
        3000
      )
    ];
  }

  addSobu(naziv: HTMLInputElement, tip: HTMLInputElement, sprat: HTMLInputElement, opis: HTMLInputElement, cena: HTMLInputElement): boolean{
    console.log("Dodaj sobu: ", naziv.value);
    this.sobeNiz.push(new Sobe(naziv.value, tip.value, sprat.valueAsNumber, opis.value, cena.valueAsNumber));
    return false;
  }
}