
export interface Igateau {

  Id : number;
  Categorie: number;
  Nom: string;
  Type: string;
  Prix: number;
  PrixLivraison: number;
  Conditionnement: string;
  LivraisonLaPoste: boolean;
  Description: string;
  Conseils: string;
  ImagePath?: string;
}
