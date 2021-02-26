import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobeComponent } from './sobe/sobe.component';
import { PretragaPipe } from './pipe/pretraga.pipe';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
