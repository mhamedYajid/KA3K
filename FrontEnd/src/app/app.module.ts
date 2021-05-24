
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

//Les services
import { PatisserieService } from './services/patisserie.service';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { DetailGateauResolverService } from './gateau/detail-gateau/detail-gateau-resolver.service';

import { CarteGateauComponent } from './gateau/carte-gateau/carte-gateau.component';
import { ListeGateauComponent } from './gateau/liste-gateau/liste-gateau.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailGateauComponent } from './gateau/detail-gateau/detail-gateau.component';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AjouterGateauComponent } from './gateau/ajouter-gateau/ajouter-gateau.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';


//Le routage
export const routes: Routes = [
  { path: '', component: ListeGateauComponent },
  { path: 'evenements', component: ListeGateauComponent },
  { path: 'assortiments', component: ListeGateauComponent },
  { path: 'assortiments-oriental', component: ListeGateauComponent },
  { path: 'ajouter-gateau', component: AjouterGateauComponent },
  { path: 'detail-gateau/:id',
    component: DetailGateauComponent,
    resolve: {gat: DetailGateauResolverService} },
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
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'},
              PatisserieService, UserService, AlertifyService, AuthService, DetailGateauResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
