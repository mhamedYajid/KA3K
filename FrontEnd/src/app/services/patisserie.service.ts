import { Igateau } from './../gateau/Igateau.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatisserieService {

  constructor(private http : HttpClient) { }

  getAllGateaux(categorie: number) : Observable<Igateau[]>{
    return this.http.get('Data/gateaux.json').pipe(
      map((data)=>{
        const gateauxArray : Array<Igateau> = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].Categorie == categorie)
          gateauxArray.push(data[id]);
        }
        return gateauxArray;
      })
    );
  }
}
