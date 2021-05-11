import { AlertifyService } from './../../services/alertify.service';
import { PatisserieService } from './../../services/patisserie.service';
import { IGateauBase } from './../../Model/IGateauBase';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Gateau } from 'src/app/Model/Gateau';


@Component({
  selector: 'app-ajouter-gateau',
  templateUrl: './ajouter-gateau.component.html',
  styleUrls: ['./ajouter-gateau.component.css']
})
export class AjouterGateauComponent implements OnInit {
  Types: Array<string> = ['gateau', 'oriental', 'biscuit'];
  FormAjoutGateau : FormGroup;
  isSuivantClick: boolean = false;
  gateau = new Gateau();



  GateauView: IGateauBase = {
    Id : null,
    Categorie: null,
    Nom:  null,
    Type:  null,
    Prix:  null,
  };

  //Template driven form
  //@ViewChild('Form') ajouterGateauForm: NgForm;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  constructor(private router: Router, private fb: FormBuilder,
    private patisserieService: PatisserieService, private alertyfy: AlertifyService) { }

  ngOnInit() {
    this.creerFormAjoutGateau();
  }

  creerFormAjoutGateau(){
    this.FormAjoutGateau = this.fb.group({
      InfosBasic: this.fb.group({
        nom: [null, [Validators.required, Validators.minLength(3)]],
        categorie: [null, Validators.required],
        type: [null, Validators.required]
      }),
      PrixConditionnement : this.fb.group({
        prix: [null, Validators.required],
        conditionnement: [null, Validators.required],
        prixLivraison: [null,],
        livraisonLaPoste: [null, Validators.required]
      }),
      Commentaires: this.fb.group({
        description: [null],
        conseils: [null]
      }),
      ImagePath: [null]
    });
  }

  //#region Getters
  //---------------------
  //Méthodes getters
  //---------------------
  get _infosBasic(){
    return this.FormAjoutGateau.controls.InfosBasic as FormGroup;
  }
  get _prixConditionnement(){
    return this.FormAjoutGateau.controls.PrixConditionnement as FormGroup;
  }
   get _commentaires(){
    return this.FormAjoutGateau.controls.Commentaires as FormGroup;
  }
  get Nom(){
    return this._infosBasic.controls.nom;
  }
  get Categorie(){
    return this._infosBasic.controls.categorie;
  }
  get Type(){
    return this._infosBasic.controls.type;
  }
  get Prix(){
    return this._prixConditionnement.controls.prix;
  }
  get Conditionnement(){
    return this._prixConditionnement.controls.conditionnement;
  }
  get PrixLivraison(){
    return this._prixConditionnement.controls.prixLivraison;
  }
  get LivraisonLaPoste(){
    return this._prixConditionnement.controls.livraisonLaPoste;
  }
  get Conseils(){
    return this._commentaires.controls.conseils;
  }
  get Description(){
    return this._commentaires.controls.description;
  }
  get ImagePath(){
    return this.FormAjoutGateau.get('ImagePath') as FormControl;
  }
//#endregion getters

  enregistrerProduit(){
   if(this.isFormulaireValid()){
      this.mapGateau();
      this.patisserieService.ajouterGateau(this.gateau);
      this.alertyfy.success("felicitations , le produit est envoyé au serveur");
      console.log(this.FormAjoutGateau);
        if(this.Categorie.value == 1){
          this.router.navigate(['/evenements']);
        }
        if(this.Categorie.value === 2){
          this.router.navigate(['/assortiments']);
        }
      }
      else{
        console.log("Veuillez fournir tous les champs requis avant d'enregistrer");

      }

  }


  mapGateau(): void{
    this.gateau.Nom = this.Nom.value;
    this.gateau.Categorie = +this.Categorie.value;
    this.gateau.Conditionnement = +this.Conditionnement.value;
    this.gateau.Conseils = this.Conseils.value;
    this.gateau.Description = this.Description.value;
    this.gateau.ImagePath = this.ImagePath.value;
    this.gateau.LivraisonLaPoste = this.LivraisonLaPoste.value;
    this.gateau.Prix = +this.Prix.value;
    this.gateau.PrixLivraison = +this.PrixLivraison.value;
    this.gateau.Type = this.Type.value;
    this.gateau.DateCreation = new Date().toString();
  }

  isFormulaireValid(): boolean{
    this.isSuivantClick = true;

    if(!this._infosBasic.valid){
      this.staticTabs.tabs[0].active = true;
      return false;
    }
    if(!this._prixConditionnement.valid){
      this.staticTabs.tabs[1].active = true;
      return false;
    }
    return true;
  }
  // onBack(){
  //   this.router.navigate(['/']);
  // }

  selectTab(tabId: number, isCurrentTabValid: boolean) {
    this.isSuivantClick = true;
    if(isCurrentTabValid){
      this.isSuivantClick = false;
      this.staticTabs.tabs[tabId].active = isCurrentTabValid;
    }



  }
}
