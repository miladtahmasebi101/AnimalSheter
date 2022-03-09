import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl()
  {
    return "url('https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/08/h5-img-7.jpg')";
  }

}
