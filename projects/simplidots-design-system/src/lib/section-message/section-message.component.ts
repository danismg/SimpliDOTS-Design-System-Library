import { Component, Input, Output, EventEmitter } from '@angular/core';
import ButtonSetting from './../models/ButtonSetting';
import { ColorEnum } from '../../assets/beheviors/button/ColorEnum';
import {
  SctMessageColor,
  SctMessageIcon,
} from '../../assets/beheviors/section-message/SctMessageMode';

@Component({
  selector: 'section-message',
  templateUrl: './section-message.component.html',
  styleUrls: ['./section-message.component.scss'],
})
export class SectionMessageComponent {
  @Input() color: SctMessageColor = SctMessageColor.INFO;
  // img
  @Input() icon: string = '';

  @Input() title: string = "Flag's Title";
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  @Input() show: boolean = true;
  @Output() onButtoClick = new EventEmitter<string>();

  funcButton(btnSetting: ButtonSetting) {
    // window.open('https://google.com', '_blank');
    if (btnSetting.title == 'Button') {
      this.show = false;
      this.onButtoClick.emit(btnSetting.title);
    } else if (btnSetting.title == 'Button1') {
      this.show = false;
      this.onButtoClick.emit(btnSetting.title);
    }
  }

  getClassNames() {
    return `slcMessage__card 
    slcMessage__card-${SctMessageColor[this.color].toLowerCase()}`;
  }

  getClassIcons() {
    return `${this.icon.toLowerCase()}`;
  }
}
