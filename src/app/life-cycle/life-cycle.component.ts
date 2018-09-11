import { Component, OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit,OnChanges,DoCheck,OnDestroy,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  items = [];
  constructor() { }

  ngOnInit() {
    this.items.push('ngOnInit')
  }
  ngOnDestroy(){
    this.items.push('ngOnDestroy');
  }
  ngDoCheck(){
    this.items.push('ngDoCheck');
  }
  ngOnChanges(){
    this.items.push('ngOnChanges');
  }
  ngAfterViewInit(){
    this.items.push('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    this.items.push('ngAfterViewChecked');
  }
  ngAfterContentInit(){
    this.items.push('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.items.push('ngAfterContentChecked');
  }
}
