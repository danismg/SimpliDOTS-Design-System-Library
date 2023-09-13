import { Component, Input } from '@angular/core';
import ButtonSetting from './../models/ButtonSetting';
import { BannerMode } from './../../assets/beheviors/banner/BannerMode';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  public iconUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Gantilah 'nama-gambar-anda.png' dengan path aktual ke gambar Anda dalam folder assets.
    this.iconUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/icon/info/ic-exit.svg'
    );
  }
  @Input() mode: BannerMode = BannerMode.INFO;
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  hidden: boolean = true;
  @Input() show: boolean = true;
  @Input() iconExit!: string;

  funcButton(key: ButtonSetting) {
    // window.open('https://google.com', '_blank');
    // this.onClickButton.emit();
  }

  getClassBg() {
    return `banner banner-${BannerMode[this.mode].toLowerCase()}`;
  }
  getClassText() {
    return `banner__text-btn banner__text-${BannerMode[
      this.mode
    ].toLowerCase()}`;
  }
  getSRC() {
    return `./assets/icon/info/ic-${BannerMode[this.mode].toLowerCase()}.svg`;
  }
  closeComponent(): void {
    this.show = false;
  }

  iconBanner() {
    if (BannerMode.WARNING || BannerMode.DANGER) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
