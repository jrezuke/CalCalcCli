import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FluidInfusionsComponent } from './fluid-infusions/fluid-infusions.component';
import { ParenteralNutritionComponent } from './parenteral-nutrition/parenteral-nutrition.component';
import { EnteralNutritionComponent } from './enteral-nutrition/enteral-nutrition.component';
import { OtherNutritionComponent } from './other-nutrition/other-nutrition.component';
import { AdditivesComponent } from './additives/additives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FluidInfusionsComponent,
    ParenteralNutritionComponent,
    EnteralNutritionComponent,
    OtherNutritionComponent,
    AdditivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
