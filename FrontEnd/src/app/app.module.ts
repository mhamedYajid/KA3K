import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Les services
import { PatisserieService } from './services/patisserie.service';
import { UserService } from './services/user.service';

import { CarteGateauComponent } from './gateau/carte-gateau/carte-gateau.component';
import { ListeGateauComponent } from './gateau/liste-gateau/liste-gateau.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailGateauComponent } from './gateau/detail-gateau/detail-gateau.component';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AjouterGateauComponent } from './gateau/ajouter-gateau/ajouter-gateau.component';


//Le routage
export const routes: Routes = [
  { path: '', component: ListeGateauComponent },
  { path: 'evenements', component: ListeGateauComponent },
  { path: 'assortiments', component: ListeGateauComponent },
  { path: 'assortiments-oriental', component: ListeGateauComponent },
  { path: 'ajouter-gateau', component: AjouterGateauComponent },
  { path: 'detail-gateau/:id', component: DetailGateauComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: '**', component: ListeGateauComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarteGateauComponent,
    ListeGateauComponent,
    NavBarComponent,
    AjouterGateauComponent,
    DetailGateauComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PatisserieService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
