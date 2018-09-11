import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent implements OnInit {
  @Input() size;
  @Output() sizeChange = new EventEmitter();
  changeSize(){
    this.size++;
    this.sizeChange.emit(this.size);
  }
  constructor() { }

  ngOnInit() {
  }

}
