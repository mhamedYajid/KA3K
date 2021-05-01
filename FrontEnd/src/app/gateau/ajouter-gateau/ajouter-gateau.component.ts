
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-gateau',
  templateUrl: './ajouter-gateau.component.html',
  styleUrls: ['./ajouter-gateau.component.scss']
})
export class AjouterGateauComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
onBack(){
  this.router.navigate(['/']);
}
}
