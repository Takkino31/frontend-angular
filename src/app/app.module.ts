import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    LoginComponent,
    PaymentsComponent,
    ProfileComponent,
    DashboardComponent,
    StudentsComponent,
    HomeComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuTrigger,
    MatMenuModule,
    MatSidenavModule,
    MatListItem,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
