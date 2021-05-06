import { Igateau } from './../Igateau.interface';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-ajouter-gateau',
  templateUrl: './ajouter-gateau.component.html',
  styleUrls: ['./ajouter-gateau.component.css']
})
export class AjouterGateauComponent implements OnInit {
  Categories: Array<string> = ['gateau', 'oriental', 'biscuit'];
  GateauView: Igateau = {
    Id : null,
  Categorie:  null,
  Nom:  null,
  Type:  null,
  Prix:  null,
  PrixLivraison:  null,
  Conditionnement:  null,
  LivraisonLaPoste: null,
  Description:  null,
  Conseils:  null,
  };
  @ViewChild('Form') ajouterGateauForm: NgForm;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  enregistrerProduit(){
    console.log("felicitations , le produit est envoyé au serveur");
    console.log(this.ajouterGateauForm.value);
  }

  // onBack(){
  //   this.router.navigate(['/']);
  // }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
