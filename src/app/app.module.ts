import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
