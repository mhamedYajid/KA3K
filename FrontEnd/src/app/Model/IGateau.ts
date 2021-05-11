import { IGateauBase } from './IGateauBase';
export interface IGateau extends IGateauBase {
  PrixLivraison?: number;
  Conditionnement: number;
  LivraisonLaPoste: boolean;
  Description?: string;
  Conseils?: string;
}
