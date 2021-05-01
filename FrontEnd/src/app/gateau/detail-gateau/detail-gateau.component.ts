import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-gateau',
  templateUrl: './detail-gateau.component.html',
  styleUrls: ['./detail-gateau.component.css']
})
export class DetailGateauComponent implements OnInit {
public gateauId: number;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.gateauId = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe(
      (params)=>{
        this.gateauId = +params['id'];
      }
    )
  }
  onChangeId(){
    this.gateauId++;
    this.router.navigate(['/detail-gateau/', this.gateauId]);
  }
}
