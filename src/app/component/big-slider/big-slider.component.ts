import { Component, OnInit } from '@angular/core';
import { Iportfolio } from 'src/app/model/portfolio-model';
import { ApiUrlService } from 'src/app/servis/api-url.service';

@Component({
  selector: 'app-big-slider',
  templateUrl: './big-slider.component.html',
  styleUrls: ['./big-slider.component.scss']
})
export class BigSliderComponent implements OnInit {
  portfolio: Iportfolio
  constructor(
    public apiurl: ApiUrlService,

  ) { }

  ngOnInit(): void {
   this.getPortfolioItem();

  }
  getPortfolioItem(){

    this.apiurl.getPortfolioItem().subscribe((arg: any) => {
      this.portfolio = arg.data;
    }, (err) => {
      console.log(err);

    });
  }
  }

