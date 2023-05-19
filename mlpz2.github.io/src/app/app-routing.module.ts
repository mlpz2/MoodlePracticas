import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  exports: [[RouterModule],AppComponent],
  imports: [
    [RouterModule],
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgxPopperjsModule,
    NgbModule
  ],
  providers: []
})
export class AppRoutingModule { }
