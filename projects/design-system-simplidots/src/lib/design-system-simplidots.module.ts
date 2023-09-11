import { NgModule } from '@angular/core';
import { DesignSystemSimplidotsComponent } from './design-system-simplidots.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [DesignSystemSimplidotsComponent, ButtonComponent],
  imports: [],
  exports: [DesignSystemSimplidotsComponent, ButtonComponent],
})
export class DesignSystemSimplidotsModule {}
