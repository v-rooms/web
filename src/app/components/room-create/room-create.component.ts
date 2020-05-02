import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomCreateDialogComponent } from '../room-create-dialog/room-create-dialog.component';

@Component({
  selector: 'vr-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  @Input() public userId: string;
  @HostListener('click') private createRoom(): void {
    this.matDialog.open(RoomCreateDialogComponent, {
      width: '25rem',
      data: this.userId
    });
  };

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

}
