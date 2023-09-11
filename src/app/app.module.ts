import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemSimplidotsModule } from 'design-system-simplidots';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DesignSystemSimplidotsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
