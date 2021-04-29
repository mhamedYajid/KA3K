import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-gateau',
  templateUrl: './liste-gateau.component.html',
  styleUrls: ['./liste-gateau.component.css'],
})
export class ListeGateauComponent implements OnInit {
  gateaux: Array<any> = [
    {
      Id: 1,
      Nom: 'Briwate amandes',
      Type: 'Oriental',
      Prix: 1.7,
      ImagePath: 'assets/images/briouates-amandes-miel.jpg',
    },
    {
      Id: 2,
      Nom: 'Ka3b Alghazal',
      Type: 'Oriental',
      Prix: 1.4,
      ImagePath: 'assets/images/ka3b-ghzal.jpg',
    },
    {
      Id: 3,
      Nom: 'Ghouriba',
      Type: 'Oriental',
      Prix: 1.4,
      ImagePath: 'assets/images/ghriba.jpg',
    },
    {
      Id: 4,
      Nom: 'Sellou',
      Type: 'Oriental',
      Prix: 7.5,
      ImagePath: 'assets/images/default_cake.jpg',
    },
    {
      Id: 5,
      Nom: 'Faqass',
      Type: 'Oriental',
      Prix: 1.3,
      ImagePath: 'assets/images/default_cake.jpg',
    },
    {
      Id: 6,
      Nom: 'Chabbakia',
      Type: 'Oriental',
      Prix: 1.55,
      ImagePath: 'assets/images/1200px-Chebakia.jpg',
    },
    {
      Id: 7,
      Nom: 'Aniversaire',
      Type: 'Evenement',
      Prix: 250,
      ImagePath: 'assets/images/1200px-Chebakia.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
