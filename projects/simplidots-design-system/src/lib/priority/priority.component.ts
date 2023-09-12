import { Component, Input, OnInit } from '@angular/core';
import { CirleColor } from '../../assets/beheviors/circle-priority/CircleColor';
@Component({
  selector: 'label-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
})
export class PriorityComponent implements OnInit {
  @Input() circle!: string;
  constructor() {}
  ngOnInit(): void {}

  getClassNames() {
    return `${this.circle}`;
  }
}
