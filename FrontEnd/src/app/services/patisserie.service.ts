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

  getAllGateaux() : Observable<Igateau[]>{
    return this.http.get('Data/gateaux.json').pipe(
      map((data)=>{
        const gateauxArray : Array<Igateau> = [];
        for(const id in data){
          gateauxArray.push(data[id]);
        }
        return gateauxArray;
      })
    );
  }
}
