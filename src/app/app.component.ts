import { Component } from '@angular/core';
import { SpacingEnum } from 'dist/design-system-simplidots/assets/beheviors/button/SpacingEnum';

import { ColorEnum } from 'projects/design-system-simplidots/src/assets/beheviors/button/ColorEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system';

  get colorBtn(): typeof ColorEnum {
    return ColorEnum;
  }
  get spacingBtn(): typeof SpacingEnum {
    return SpacingEnum;
  }

  // Fungsi button sendiri
  goToFacebook() {
    window.open('https://facebook.com', '_blank');
  }
}
