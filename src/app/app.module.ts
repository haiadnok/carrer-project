import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { HomeComponent } from './home/home.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { OnlineTrainingDetailsComponent } from './online-training-details/online-training-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    HomeComponent,
    HomecomponentComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    OnlineTrainingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
