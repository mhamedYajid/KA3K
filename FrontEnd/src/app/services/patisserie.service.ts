import { IGateau } from './../Model/IGateau';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Gateau } from '../Model/Gateau';

@Injectable({
  providedIn: 'root'
})
export class PatisserieService {

  constructor(private http : HttpClient) { }

  getGateau(id: number){
    return this.getAllGateaux().pipe(
      map(listeGateaux => {
        return listeGateaux.find(x => x.Id === id);
      })
    )
  }

  getAllGateaux(categorie?: number) : Observable<Gateau[]>{
    return this.http.get('Data/gateaux.json').pipe(
      map((data)=>{
        const gateauxArray : Array<Gateau> = [];
        const localGateaux = JSON.parse(localStorage.getItem('newGateau'));
        if(localGateaux){
          for(const id in localGateaux){
            if(categorie){
              if(localGateaux.hasOwnProperty(id) && localGateaux[id]?.Categorie == categorie)
            gateauxArray.push(localGateaux[id]);
            }else{
              gateauxArray.push(localGateaux[id]);
            }
          }
        }

        for(const id in data){
          if(categorie){
            if(data.hasOwnProperty(id) && data[id].Categorie == categorie)
            gateauxArray.push(data[id]);
          }else{
            gateauxArray.push(data[id]);
          }

        }
        return gateauxArray;
      })
    );
  }

  ajouterGateau(gateau: Gateau){
    let newGateau = [gateau];

    //Ajoute le nouveau produit en tableau si la valeur newGateau existe dans localStorage.
    if(localStorage.getItem('newGateau')){
     newGateau = [gateau, ... JSON.parse(localStorage.getItem('newGateau'))];
    }

    localStorage.setItem('newGateau', JSON.stringify(newGateau));
  }

  newGateauId(): number{
    if(localStorage.getItem('GId')){
      let gid = +localStorage.getItem('GId');
      gid++;
      localStorage.setItem('GId', String(gid));
      return gid;
    }else{
      localStorage.setItem('GId', '101');
      return 101;
    }
  }
}
