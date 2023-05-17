import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    [RouterModule.forRoot()],
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
