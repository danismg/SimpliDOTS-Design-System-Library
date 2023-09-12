import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimplidotsDesignSystemModule } from 'simplidots-design-system';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SimplidotsDesignSystemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
