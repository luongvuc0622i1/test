import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotComponent } from './mot/mot.component';
import { HaiComponent } from './hai/hai.component';

@NgModule({
  declarations: [
    AppComponent,
    MotComponent,
    HaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
