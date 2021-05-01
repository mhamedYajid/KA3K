import { AjouterGateauComponent } from './gateau/ajouter-gateau/ajouter-gateau.component';
import { PatisserieService } from './services/patisserie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {CarteGateauComponent} from './gateau/carte-gateau/carte-gateau.component';
import { ListeGateauComponent } from './gateau/liste-gateau/liste-gateau.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailGateauComponent } from './gateau/detail-gateau/detail-gateau.component';

export const routes: Routes = [
{path: '', component: ListeGateauComponent},
{path: 'evenements', component: ListeGateauComponent},
{path: 'assortiments', component: ListeGateauComponent},
{path: 'assortiments-oriental', component: ListeGateauComponent},
{path: 'ajouter-gateau', component: AjouterGateauComponent},
{path: 'detail-gateau/:id', component: DetailGateauComponent},
{path: '**', component: ListeGateauComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    CarteGateauComponent,
    ListeGateauComponent,
      NavBarComponent,
      AjouterGateauComponent,
      DetailGateauComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PatisserieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
