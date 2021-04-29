import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-gateau',
  // template: '<h1>Je suis une carte de gateau</h1>'
  templateUrl: 'carte-gateau.component.html',
  styleUrls: ['carte-gateau.component.css']

})

export class CarteGateauComponent{
Gateau: any = {
"Id" : 1,
"Nom" : "Briwate",
"Type": "Oriental",
"Prix" : 1.50
}

}
