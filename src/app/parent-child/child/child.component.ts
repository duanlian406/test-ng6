import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyServiceService} from '../../my-service.service';
import {filter,map,debounceTime,combineLatest,withLatestFrom,scan,} from 'rxjs/operators';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('panel-title') 
  set title(t){
    this.heading += t; 
  }
  get title(){
    return this.heading;
  }
  @Output() changeHeading = new EventEmitter();
  heading = '子组件标题';
  items = [1,2,3,4,5];
  show(){
    console.log(this.heading);
  }
  modify(){
    this.changeHeading.emit('bbb');
  }
  constructor(private service: MyServiceService) { }

  ngOnInit() {
    this.service.mySub.pipe(map(v=>v*2)).subscribe(v=>this.items.push(v));
  }

}
