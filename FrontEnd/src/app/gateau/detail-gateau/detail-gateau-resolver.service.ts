import { PatisserieService } from './../../services/patisserie.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Gateau } from 'src/app/Model/Gateau';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DetailGateauResolverService implements Resolve<Gateau> {

constructor(private patisserieService: PatisserieService, private router: Router) {

}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Gateau> | Gateau{
  const gateauId = route.params['id'];
  return this.patisserieService.getGateau(+gateauId).pipe(
    catchError(
      (error)=>{this.router.navigate(['/']);
      return of(null);

      })
  );
}

}
