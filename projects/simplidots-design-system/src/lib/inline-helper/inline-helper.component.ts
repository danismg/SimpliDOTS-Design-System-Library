import { Component, Input } from '@angular/core';

@Component({
  selector: 'inline-helper',
  templateUrl: './inline-helper.component.html',
  styleUrls: ['./inline-helper.component.scss'],
})
export class InlineHelperComponent {
  @Input() title: string = 'Title';
  @Input() icPin!: string;
}
