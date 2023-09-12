import { Component, Input, Output, EventEmitter } from '@angular/core';
import ButtonSetting from './../models/ButtonSetting';
import ProgressIndicatorSetting from './../models/ProgressIndicatorSetting';
import { ColorEnum } from '../../assets/beheviors/button/ColorEnum';
import { SpacingEnum } from '../../assets/beheviors/button/SpacingEnum';

@Component({
  selector: 'progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() settings: ProgressIndicatorSetting[] = [];
  @Input() title: string = 'Text';
  // @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  @Input() show: boolean = true;
  @Output() onButtoClick = new EventEmitter<ButtonSetting>();

  funcButton(btnSetting: ButtonSetting) {
    this.onButtoClick.emit(btnSetting);
    if (btnSetting.color === ColorEnum.SUBTLE && btnSetting.title === 'Batal') {
      this.show = false;
    }
    if (
      btnSetting.color === ColorEnum.PRIMARY &&
      btnSetting.title === 'Simpan Kriteria'
    ) {
      this.show = false;
    }
  }
  get colorBtn(): typeof ColorEnum {
    return ColorEnum;
  }
  get spacingBtn(): typeof SpacingEnum {
    return SpacingEnum;
  }
}
