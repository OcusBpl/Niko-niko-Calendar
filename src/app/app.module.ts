import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import { DemoComponent } from './calenda/demo/demo.component';
import { DemoUtilsModule } from '../demo-utils/module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CalendaComponent } from './calenda/calenda.component';
import { HeaderComponent } from './header/header.component';
import { SingleCalComponent } from './calenda/single-cal/single-cal.component';
import { CalFormComponent } from './calenda/cal-form/cal-form.component';
import {AuthService} from './services/auth.service';
import {CalsService} from './services/cals.service';
import {AuthGuardService} from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'calenda', canActivate: [AuthGuardService], component: CalendaComponent},
  {path: 'calenda/new', canActivate: [AuthGuardService], component: CalFormComponent},
  {path: 'calenda/view/:id', canActivate: [AuthGuardService], component: SingleCalComponent},
  {path: '', redirectTo: 'calenda', pathMatch: 'full'},
  {path: '**', redirectTo: 'calenda'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CalendaComponent,
    HeaderComponent,
    SingleCalComponent,
    CalFormComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    DemoUtilsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    CalsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
