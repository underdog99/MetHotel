import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Sobe } from '../sobe/sobe.model';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  currRoom: Subject<Sobe> = new BehaviorSubject<Sobe>(null);

  constructor(private _httpClient: HttpClient) { }

  public getPrice(numberOfNights: number, price: number){
    
    return numberOfNights * price;
  }

  private _roomFromObj(item: any){
    if(item.sobe){
      let soba = new Sobe(item.sobe.naziv, item.sobe.tip, item.sobe.sprat, item.sobe.opis, item.sobe.cena);
      return soba;
    }
  }

  public setRoom(s: Sobe){
    this.currRoom.next(s);
  }

  public getRoom(): Observable<Sobe>{
    return this.currRoom;
  }
}
