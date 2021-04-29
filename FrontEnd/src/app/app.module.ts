import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CarteGateauComponent} from './gateau/carte-gateau/carte-gateau.component';
import { ListeGateauComponent } from './gateau/liste-gateau/liste-gateau.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [	
    AppComponent,
    CarteGateauComponent,
    ListeGateauComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
