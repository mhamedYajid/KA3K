
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-gateau',
  templateUrl: './ajouter-gateau.component.html',
  styleUrls: ['./ajouter-gateau.component.scss']
})
export class AjouterGateauComponent implements OnInit {
  @ViewChild('Form') ajouterGateauForm: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  enregistrerProduit(){
    console.log("felicitations , le produit est envoyé au serveur");
    console.log(this.ajouterGateauForm);
  }

  onBack(){
    this.router.navigate(['/']);
}
}
