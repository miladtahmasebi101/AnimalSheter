import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFaq } from 'src/app/model/faq-model';
import { ApiUrlService } from 'src/app/servis/api-url.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  info: any;
  faq: IFaq;
  expandedIndex = 0;
  constructor(
    public apiurl: ApiUrlService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.openquestion();
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
