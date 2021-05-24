import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, nomPropriete: string): any[] {
    const resultArray = [];
   if(value){
    if(value.length === 0 || filterString === '' || nomPropriete === ''){
      return value;
    }

    for(const item of value){
      if(item[nomPropriete].toLocaleLowerCase() === filterString.toLocaleLowerCase()){
        resultArray.push(item);
      }
    }
   }
    return resultArray;
  }

}
