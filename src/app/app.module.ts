import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule, DatepickerModule } from "ngx-bootstrap/datepicker";
import { NgxSelectModule } from 'ngx-select-ex';
import { NgxSpinnerModule } from "ngx-spinner";
import { ComplainFormComponent } from './component/complain-form/complain-form.component';

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import * as firebase from "firebase/app";
import { SuccessComponent } from './component/success/success.component';
import { HttpClientModule } from '@angular/common/http';
firebase.initializeApp(environment.fire);
@NgModule({
  declarations: [
    AppComponent,
    ComplainFormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.fire),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgxSelectModule,
    NgxSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
