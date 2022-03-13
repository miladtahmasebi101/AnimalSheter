import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl()
  {
    return "url('https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/h1-img-5.jpg?id=276')";
  }

}
