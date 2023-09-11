import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorEnum } from '../../assets/beheviors/button/ColorEnum';
import { SpacingEnum } from '../../assets/beheviors/button/SpacingEnum';
import { ButtonMode } from '../../assets/beheviors/button/ButttonMode';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: ColorEnum = ColorEnum.DEFAULT;
  @Input() spacing: SpacingEnum = SpacingEnum.DEFAULT;
  @Input() mode: ButtonMode = ButtonMode.DEFAULT;
  @Input() padding!: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  ngOnInit(): void {}

  getClassNames() {
    return `btn 
    btn-${ColorEnum[this.color].toLowerCase()} 
    btn-${SpacingEnum[this.spacing].toLowerCase()}`;
  }

  handleClick() {
    this.onClick.emit();
  }
  hiddenButton(): boolean {
    if (this.mode === ButtonMode.DISABLED) {
      return true;
    }
    return false;
  }
}
