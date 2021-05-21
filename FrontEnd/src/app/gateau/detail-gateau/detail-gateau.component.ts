import { Gateau } from './../../Model/Gateau';
import { PatisserieService } from './../../services/patisserie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-detail-gateau',
  templateUrl: './detail-gateau.component.html',
  styleUrls: ['./detail-gateau.component.css']
})
export class DetailGateauComponent implements OnInit {
public gateauId: number;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
  constructor(private activeRoute: ActivatedRoute, private router: Router,
     private patisserieService: PatisserieService) { }

     gateau = new Gateau();

  ngOnInit(): void {
    this.gateauId = this.activeRoute.snapshot.params['id'];
    this.activeRoute.data.subscribe(
      (donnee: Gateau)=>{
        this.gateau = donnee['gat'];
      }
    )




    this.galleryOptions = [
      {
        width: '100%',
        height: '470px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
      // ,
      // // max-width 800
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // // max-width 400
      // {
      //   breakpoint: 400,
      //   preview: false
      // }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/feqqas-medium.jpg',
        medium: 'assets/images/feqqas-small.jpg',
        big: 'assets/images/feqqas-big.jpg'
      },

      {
        small: 'assets/images/Chebakia.jpg',
        medium: 'assets/images/Chebakia.jpg',
        big: 'assets/images/Chebakia.jpg'
      },
      {
        small: 'assets/images/ghriba.jpg',
        medium: 'assets/images/ghriba.jpg',
        big: 'assets/images/ghriba.jpg'
      },
      {
        small: 'assets/images/briouates-amandes-miel.jpg',
        medium: 'assets/images/briouates-amandes-miel.jpg',
        big: 'assets/images/briouates-amandes-miel.jpg'
      }
    ];
    // this.activeRoute.params.subscribe(
    //   (params)=>{
    //     this.gateauId = +params['id'];
    //     this.patisserieService.getGateau(this.gateauId).subscribe(
    //       (donnees : Gateau)=>{
    //         this.gateau = donnees;
    //       }
    //     )
    //   }
    // )
  }

}
