import { Igateau } from './../Igateau.interface';
import { PatisserieService } from './../../services/patisserie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-gateau',
  templateUrl: './liste-gateau.component.html',
  styleUrls: ['./liste-gateau.component.css'],
})
export class ListeGateauComponent implements OnInit {
  gateaux: Array<Igateau>;

  constructor(private patisserieService: PatisserieService) {}

  ngOnInit(): void {
    this.patisserieService.getAllGateaux().subscribe(
      (donnees) => {
        this.gateaux = donnees;
      },
      (error) => {
        console.log("httperror : ");
        console.log(error);
      }
    );
  }
}
