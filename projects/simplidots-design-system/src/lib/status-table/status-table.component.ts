import { Component, Input, OnInit, Output } from '@angular/core';
import { ColorStatus } from '../../assets/beheviors/flag/label-status/ColorStatus';
@Component({
  selector: 'status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss'],
})
export class StatusTableComponent implements OnInit {
  @Input() color: ColorStatus = ColorStatus.DEFAULT;
  constructor() {}
  ngOnInit(): void {}

  getClassNames() {
    return `lozenge loz-${ColorStatus[this.color].toLowerCase()}`;
  }
}
