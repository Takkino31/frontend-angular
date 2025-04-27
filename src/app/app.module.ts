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
import { MatListItem, MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';

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
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    MatInput,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
