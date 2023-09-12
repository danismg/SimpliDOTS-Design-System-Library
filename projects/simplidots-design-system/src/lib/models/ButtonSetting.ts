import { ColorEnum } from '../../assets/beheviors/button/ColorEnum';
import { SpacingEnum } from '../../assets/beheviors/button/SpacingEnum';
import { ButtonMode } from '../../assets/beheviors/button/ButttonMode';
export default class ButtonSetting {
  title: string = '';
  color!: ColorEnum;
  compact!: SpacingEnum;
}
