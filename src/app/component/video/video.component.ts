import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFaq } from 'src/app/model/faq-model';
import { ApiUrlService } from 'src/app/servis/api-url.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  info: any;
  faq: IFaq;
  expandedIndex = 0;
  constructor(
    public apiurl: ApiUrlService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getUserinfo();
    this.openquestion();
  }
  getUserinfo() {
    this.apiurl.getUserinformation().subscribe((arg: any) => {
      this.info = arg;
      console.log("inooooo", this.info)
    }, (err) => {
      console.log(err);

    });
  }
  onTitleClick(btnVal: any) {
    this.faq.Content = btnVal.description;
  }
  openquestion() {

    this.apiurl.getFaq().subscribe((arg: any) => {
      this.faq = arg.data;
      console.log("inooooo222", this.faq)
    }, (err) => {
      console.log(err);

    });
  }

}
