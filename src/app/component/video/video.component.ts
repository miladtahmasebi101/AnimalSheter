import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiUrlService } from 'src/app/servis/api-url.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
info: any;
  constructor(
   public apiurl : ApiUrlService,
   private http : HttpClient,
  ) { }

  ngOnInit(): void {
    this.getUserinfo();
  }
  getUserinfo() {
    this.apiurl.getUserinformation().subscribe((arg: any) => {
      this.info = arg;
      console.log("inooooo",this.info)
    }, (err) => {
    console.log(err);
    
    });
  }

}
