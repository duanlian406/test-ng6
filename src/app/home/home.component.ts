import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heading = 'my heading';
  url = '';
  base = './assets/images/';
  fontSize = 16;
  currentTime;
  getValue(){
    return this.heading.split('').reverse().join('');
  }
  show(v){
    alert(v);
  }
  change(){
    this.url = this.base+~~(Math.random()*9+1)+'.png';
  }
  test(e){
    console.log(e.type)
  }
  constructor() {}

  ngOnInit() {
    this.change();
    setInterval(_=>this.currentTime = new Date);
  }

}
