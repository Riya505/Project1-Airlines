import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAllAirlinesComponent } from './view-all-airlines/view-all-airlines.component';
import { ViewAllPassengersComponent } from './view-all-passengers/view-all-passengers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllAirlinesComponent,
    ViewAllPassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
