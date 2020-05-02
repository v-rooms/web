import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vr-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss']
})
export class DialogWrapperComponent {
  @Input() public name: string;
  @Input() public cancelBtnName = 'GLOBALS.CANCEL';
  @Input() public okBtnName: string;

  @Input() public customOkClose: boolean;
  @Output() public okEvent = new EventEmitter();
}
