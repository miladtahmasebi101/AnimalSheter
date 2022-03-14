import { Component, Input, OnInit } from '@angular/core';
import { InformationModel } from 'src/app/model/info.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  sliderItems = [{ src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp' },
  { src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp' }]

  info = [{
    hrefimg: "https://pawfriends.qodeinteractive.com/how-to-bond-with-your-new-rescue-pet/",
    titleimg: "How To Bond With Your New Rescue Pet?",
    srcimg: "https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/blog-5-img-1.jpg",
    datehref: "https://pawfriends.qodeinteractive.com/2019/07/",
    title: "Read the latest blog posts",
    date: "July 18, 2019",
    text: "Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus",
  }, {
    hrefimg: "https://pawfriends.qodeinteractive.com/how-to-bond-with-your-new-rescue-pet/",
    titleimg: "How To Bond With Your New Rescue Pet?",
    srcimg: "https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/blog-5-img-1.jpg",
    datehref: "https://pawfriends.qodeinteractive.com/2019/07/",
    title: "Read the latest blog posts",
    date: "July 18, 2019",
    text: "Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus",
  }]

  logos = [{ src: 'https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/08/client-1-white.png', url: '#' },
  { src: 'https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/08/client-2-white.png', url: '#' },
  { src: 'https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/08/client-4-white.png' }]

  constructor() { }

  ngOnInit(): void {
  }

}
