import { Component, Input, OnInit } from '@angular/core';
import { InformationModel } from '../../model/info.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {
  @Input() info: InformationModel[] = [];
  span = 'Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus';

  constructor() { }

  ngOnInit(): void {
  }

}
