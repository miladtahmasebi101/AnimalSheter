import { Component, OnInit } from '@angular/core';
import { IbigGallery } from '../../model/bigGallery-model';
import { ApiUrlService } from '../../servis/api-url.service';

@Component({
  selector: 'app-big-gallery',
  templateUrl: './big-gallery.component.html',
  styleUrls: ['./big-gallery.component.scss']
})
export class BigGalleryComponent implements OnInit {
bigGallery: IbigGallery;
  constructor(
    public apiUrl:ApiUrlService
  ) { }

  ngOnInit(): void {
    this.getBigGalleryItem();
  }
  getBigGalleryItem(){
    this.apiUrl.getBigGalleryItem().subscribe((arg: any) => {
      this.bigGallery = arg.data;
    }, (err) => {
      console.log(err);

    });
  }

}
