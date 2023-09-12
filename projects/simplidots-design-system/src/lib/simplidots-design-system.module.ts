import { NgModule } from '@angular/core';
import { SimplidotsDesignSystemComponent } from './simplidots-design-system.component';
import { ButtonMode } from '../assets/beheviors/button/ButttonMode';
import { ColorEnum } from '../assets/beheviors/button/ColorEnum';
import { SpacingEnum } from '../assets/beheviors/button/SpacingEnum';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BannerMode } from '../assets/beheviors/banner/BannerMode';
import ButtonSetting from './../lib/models/ButtonSetting';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {
  BgCheckBox,
  ConditionCheckBox,
  ModeCheckBox,
  ValidCheckBox,
} from '../assets/beheviors/checkbox/checkboxMode';
import { FlagComponent } from './flag/flag.component';
import { FlagColor, FlagIcon } from '../assets/beheviors/flag/FlagMode';
import BreadCrumbsSetting from './models/BreadCrumbsSetting';
import InfoFlagLongSetting from './models/InfoFlagLongSetting';
import PaginationSetting from './models/PaginationSetting';
import ProgressBarSetting from './models/ProgressBarSetting';
import ProgressIndicatorSetting from './models/ProgressIndicatorSetting';
import ProgressTrakerSetting from './models/ProgressTrakerSetting';
import { InlineHelperComponent } from './inline-helper/inline-helper.component';
import { ListBreadcrumbsComponent } from './list-breadcrumbs/list-breadcrumbs.component';
import { OnboardingModalComponent } from './onboarding-modal/onboarding-modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PriorityComponent } from './priority/priority.component';
import { BreadCrumbColor } from '../assets/beheviors/breadcrumb/BreadCrumbColor';
import { EmptyStateIcon } from '../assets/beheviors/empty-state/EmptyStateIcon';
import { ColorStatus } from '../assets/beheviors/flag/label-status/ColorStatus';
import {
  ProgressTrakerMode,
  ProgressTrakerCondition,
} from '../assets/beheviors/progress-traker/ProgressTrakerMode';
import {
  SctMessageColor,
  SctMessageIcon,
} from '../assets/beheviors/section-message/SctMessageMode';
import { TextFieldInput } from '../assets/beheviors/text-field/TextFieldMode';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {
  textareaSize,
  textareaMode,
} from '../assets/beheviors/textarea/textareaMode';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ProgressTrakerComponent } from './progress-traker/progress-traker.component';
import { SectionMessageComponent } from './section-message/section-message.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CirleColor } from '../assets/beheviors/circle-priority/CircleColor';
import { FlagLongComponent } from './flag-long/flag-long.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  declarations: [
    SimplidotsDesignSystemComponent,
    ButtonComponent,
    BannerComponent,
    CheckboxComponent,
    EmptyStateComponent,
    FlagComponent,
    InlineHelperComponent,
    ListBreadcrumbsComponent,
    OnboardingModalComponent,
    PaginationComponent,
    PriorityComponent,
    ProgressBarComponent,
    ProgressIndicatorComponent,
    ProgressTrakerComponent,
    SectionMessageComponent,
    StatusTableComponent,
    TextFieldComponent,
    TextareaComponent,
    FlagLongComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SimplidotsDesignSystemComponent,
    ButtonComponent,
    BannerComponent,
    CheckboxComponent,
    EmptyStateComponent,
    FlagComponent,
    InlineHelperComponent,
    ListBreadcrumbsComponent,
    OnboardingModalComponent,
    PaginationComponent,
    PriorityComponent,
    ProgressBarComponent,
    ProgressIndicatorComponent,
    ProgressTrakerComponent,
    SectionMessageComponent,
    StatusTableComponent,
    TextFieldComponent,
    TextareaComponent,
    FlagLongComponent,
  ],
})
export class SimplidotsDesignSystemModule {}

export {
  ButtonMode,
  ColorEnum,
  SpacingEnum,
  BannerMode,
  BgCheckBox,
  ConditionCheckBox,
  ModeCheckBox,
  ValidCheckBox,
  FlagColor,
  FlagIcon,
  BreadCrumbColor,
  EmptyStateIcon,
  ColorStatus,
  ProgressTrakerMode,
  ProgressTrakerCondition,
  SctMessageColor,
  SctMessageIcon,
  TextFieldInput,
  textareaSize,
  textareaMode,
  CirleColor,
};

export {
  ButtonSetting,
  BreadCrumbsSetting,
  InfoFlagLongSetting,
  PaginationSetting,
  ProgressBarSetting,
  ProgressIndicatorSetting,
  ProgressTrakerSetting,
};
