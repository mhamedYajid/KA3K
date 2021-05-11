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

  getAllGateaux(categorie: number) : Observable<IGateau[]>{
    return this.http.get('Data/gateaux.json').pipe(
      map((data)=>{
        const gateauxArray : Array<IGateau> = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].Categorie == categorie)
          gateauxArray.push(data[id]);
        }
        return gateauxArray;
      })
    );
  }

  ajouterGateau(gateau: Gateau){
    localStorage.setItem('newGateau', JSON.stringify(gateau));
  }
}
