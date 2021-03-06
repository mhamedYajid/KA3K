import { PatisserieService } from './../../services/patisserie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGateau } from 'src/app/Model/IGateau';

@Component({
  selector: 'app-liste-gateau',
  templateUrl: './liste-gateau.component.html',
  styleUrls: ['./liste-gateau.component.css'],
})
export class ListeGateauComponent implements OnInit {
  gateaux: Array<IGateau>;
  categorie : number;
  Nom: string = '';
  ChampRecherche: string = '';
  triParParams = 'Nom';
  triDirection: string = 'asc';

  constructor(private patisserieService: PatisserieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()==="evenements")
    {this.categorie = 1}
    else {this.categorie = 2;}

    this.patisserieService.getAllGateaux(this.categorie).subscribe(
      (donnees) => {
        this.gateaux = donnees;
        console.log(donnees);
        } ,
      (error) => {
        console.log("httperror : ");
        console.log(error);
      }
    );
  }

  onNomFilter(){
this.Nom = this.ChampRecherche;
  }
  onClearNomFilter(){
    this.Nom = '';
    this.ChampRecherche = '';
  }
  onTriDirection(){
   if(this.triDirection === 'desc'){
     this.triDirection = 'asc';
   }
   else{
     this.triDirection = 'desc';
   }
  }
}
