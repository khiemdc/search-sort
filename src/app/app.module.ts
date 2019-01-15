import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category.component';
import { CategoryPipe } from './category.pipe';
import { OrderByPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryPipe, 
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
