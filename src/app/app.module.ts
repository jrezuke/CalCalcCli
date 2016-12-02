import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { CalcHomeComponent } from './calc-home/calc-home.component';
import { FluidInfusionsComponent } from './fluid-infusions/fluid-infusions.component';
import { ParenteralNutritionComponent } from './parenteral-nutrition/parenteral-nutrition.component';
import { EnteralNutritionComponent } from './enteral-nutrition/enteral-nutrition.component';
import { OtherNutritionComponent } from './other-nutrition/other-nutrition.component';
import { AdditivesComponent } from './additives/additives.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsService } from './subjects/subjects.service';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
//import { CalcEntryModule } from './calc-entry/calc-entry.module';

@NgModule({
  declarations: [
    AppComponent,
    CalcHomeComponent,
    FluidInfusionsComponent,
    ParenteralNutritionComponent,
    EnteralNutritionComponent,
    OtherNutritionComponent,
    AdditivesComponent,
    SubjectsComponent,
    AboutComponent,
    SettingsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [SubjectsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
