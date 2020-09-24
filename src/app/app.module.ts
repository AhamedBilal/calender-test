import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {AppRoutingModule} from './app-routing.module';
import { CalenderViewComponent } from './calender-view/calender-view.component';
import { CalenderDataComponent } from './calender-data/calender-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalenderViewComponent,
    CalenderDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
