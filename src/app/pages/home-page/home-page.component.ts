import { Component, Input, OnInit } from '@angular/core';
import { InformationModel } from 'src/app/component/models/info.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
@Input() info : InformationModel[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
