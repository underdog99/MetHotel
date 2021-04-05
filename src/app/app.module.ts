import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobeComponent } from './sobe/sobe.component';
import { PretragaPipe } from './pipe/pretraga.pipe';
import { RoomServiceService } from './services/room-service.service';
import { SingleRoomComponent } from './components/single-room/single-room.component';

@NgModule({
  declarations: [
    AppComponent,
    SobeComponent,
    PretragaPipe,
    SingleRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RoomServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
