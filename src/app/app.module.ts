import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AraLogoComponent } from './ara-logo/ara-logo.component';


@NgModule({
  declarations: [
    AppComponent,
    AraLogoComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
