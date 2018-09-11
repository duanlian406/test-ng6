import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.scss']
})
export class BrotherComponent implements OnInit {
  send(){
    this.service.mySub.next(~~(Math.random()*10);
  }
  constructor(private service: MyServiceService) { }

  ngOnInit() {
  }

}
