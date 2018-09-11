import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './parent-child/child/child.component';
import { BrotherComponent } from './parent-child/brother/brother.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FontSizeComponent,
    ParentChildComponent,
    ChildComponent,
    BrotherComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
