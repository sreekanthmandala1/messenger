import {NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularmaterialModule} from './AngularMaterial/angularMaterial.module'
import {ScrollingModule} from '@angular/cdk/scrolling';

import { HomeComponent } from './components/home/home.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSideBarComponent,
    MiddleBarComponent,
    RightSideBarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    AngularmaterialModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
