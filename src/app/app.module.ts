import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobeComponent } from './sobe/sobe.component';
import { PretragaPipe } from './pipe/pretraga.pipe';
import { RoomServiceService } from './services/room-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SobeComponent,
    PretragaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RoomServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
