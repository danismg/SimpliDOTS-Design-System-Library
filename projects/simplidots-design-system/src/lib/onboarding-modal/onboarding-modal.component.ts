import { Component, EventEmitter, Input, Output } from '@angular/core';
import ButtonSetting from './../models/ButtonSetting';
import { ColorEnum } from '../../assets/beheviors/button/ColorEnum';

@Component({
  selector: 'onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.scss'],
})
export class OnboardingModalComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  @Input() icon!: string;
  @Input() colorBg: string = 'rgba(73, 86, 94, 0.5)';
  @Input() show: boolean = true;
  @Output() onButtoClick = new EventEmitter<ColorEnum>();

  getIconNames() {
    return `${this.icon.toLowerCase()}`;
  }

  showStyle(): boolean {
    if (this.icon === '') {
      return false;
    }
    return true;
  }

  funcButton(btnSetting: ButtonSetting) {
    // window.open('https://google.com', '_blank');
    if (btnSetting.color === ColorEnum.PRIMARY) {
      this.show = false;
      this.onButtoClick.emit(ColorEnum.PRIMARY);
    } else if (btnSetting.color === ColorEnum.SECONDARY) {
      this.onButtoClick.emit(ColorEnum.SECONDARY);
    } else if (btnSetting.color === ColorEnum.DEFAULT) {
      this.onButtoClick.emit(ColorEnum.DEFAULT);
    } else if (btnSetting.color === ColorEnum.SUBTLE) {
      this.show = false;
      this.onButtoClick.emit(ColorEnum.SUBTLE);
    } else if (btnSetting.color === ColorEnum.LINK) {
      this.onButtoClick.emit(ColorEnum.LINK);
    }
  }
}
