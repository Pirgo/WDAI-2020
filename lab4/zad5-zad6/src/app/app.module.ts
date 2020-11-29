import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zad5Component } from './zad5/zad5.component';
import { RouterModule } from '@angular/router';
import { Zad6ParentComponent } from './zad6-parent/zad6-parent.component';
import { Zad6ChildComponent } from './zad6-child/zad6-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Zad5Component,
    Zad6ParentComponent,
    Zad6ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "", component: Zad5Component},
      {path: "zad6", component:Zad6ParentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
