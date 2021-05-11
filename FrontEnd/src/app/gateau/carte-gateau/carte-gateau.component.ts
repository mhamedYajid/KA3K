import { IGateauBase } from './../../Model/IGateauBase';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte-gateau',
  templateUrl: 'carte-gateau.component.html',
  styleUrls: ['carte-gateau.component.css']

})


export class CarteGateauComponent{

  @Input() gateau : IGateauBase;
  @Input() hideIcons: boolean;


}
