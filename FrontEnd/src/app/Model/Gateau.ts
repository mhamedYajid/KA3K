import { IGateauBase } from './IGateauBase';

export class Gateau implements IGateauBase{

  Id : number;
  Categorie: number;
  Nom: string;
  Type: string;
  Prix: number;
  PrixLivraison?: number;
  Conditionnement: number;
  LivraisonLaPoste: boolean;
  Description?: string;
  Conseils?: string;
  ImagePath?: string;
  DateCreation: string;
}
