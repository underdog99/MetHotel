import { Component } from '@angular/core';
import { RoomServiceService } from './services/room-service.service';
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

    roomService: RoomServiceService
  }

  addSobu(naziv: HTMLInputElement, tip: HTMLInputElement, sprat: HTMLInputElement, opis: HTMLInputElement, cena: HTMLInputElement): boolean{
    console.log("Dodaj sobu: ", naziv.value);
    this.sobeNiz.push(new Sobe(naziv.value, tip.value, sprat.valueAsNumber, opis.value, cena.valueAsNumber));
    return false;
  }

  public obrisiSobu(soba: Sobe){
    this.sobeNiz = this.sobeNiz.filter(item => {
      return item.naziv !== soba.naziv
    });
  }

  public updateSobu(soba: Sobe){
    let id = this.sobeNiz.findIndex(i => i.naziv === soba.naziv);
    this.sobeNiz[id].naziv = "Azurirano";
  }
}
