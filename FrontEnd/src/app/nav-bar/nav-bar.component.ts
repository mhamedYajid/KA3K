import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  utilisateurConnecte: string;

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){

    this.utilisateurConnecte = localStorage.getItem('token');
    return this.utilisateurConnecte;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertify.error('Vous êtes déconnecté')
  }

}
