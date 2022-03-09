import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-therapeutic-tips',
  templateUrl: './therapeutic-tips.component.html',
  styleUrls: ['./therapeutic-tips.component.scss']
})
export class TherapeuticTipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl()
{
  return "url('https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/h5-img-7-5.png')";
}

}
