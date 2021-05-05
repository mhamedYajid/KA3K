
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-ajouter-gateau',
  templateUrl: './ajouter-gateau.component.html',
  styleUrls: ['./ajouter-gateau.component.scss']
})
export class AjouterGateauComponent implements OnInit {
  //Categories: Array<string> = ['gateau', 'oriental', 'biscuit'];
  @ViewChild('Form') ajouterGateauForm: NgForm;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  enregistrerProduit(){
    console.log("felicitations , le produit est envoyé au serveur");
    console.log(this.ajouterGateauForm);
  }

  // onBack(){
  //   this.router.navigate(['/']);
  // }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
