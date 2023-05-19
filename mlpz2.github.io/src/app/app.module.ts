import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterOutlet} from "@angular/router";
@NgModule({
  declarations: [



],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterOutlet
  ],
  exports: [

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
