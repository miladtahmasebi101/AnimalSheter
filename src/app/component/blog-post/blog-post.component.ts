import { Component, OnInit } from '@angular/core';
import { InformationModel } from '../../model/info.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {
  info: InformationModel[] = [{
    
    hrefimg: "https://pawfriends.qodeinteractive.com/how-to-bond-with-your-new-rescue-pet/",
    titleimg:"How To Bond With Your New Rescue Pet?",
    srcimg:"https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/blog-5-img-1.jpg",
    datehref:"https://pawfriends.qodeinteractive.com/2019/07/",
    title: "Read the latest blog posts",
    date:"July 18, 2019",
    text: "Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus",

  },{
    hrefimg: "https://pawfriends.qodeinteractive.com/how-to-bond-with-your-new-rescue-pet/",
    titleimg:"How To Bond With Your New Rescue Pet?",
    srcimg:"https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/blog-5-img-1.jpg",
    datehref:"https://pawfriends.qodeinteractive.com/2019/07/",
    title: "Read the latest blog posts",
    date:"July 18, 2019",
    text: "Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus",
  }]
  span = 'Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus';

  constructor() { }

  ngOnInit(): void {
  }

}
