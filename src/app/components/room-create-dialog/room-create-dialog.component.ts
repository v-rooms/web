import { Component, Inject, OnInit } from '@angular/core';
import { RoomType } from '@core/models/enums/room-type.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomsService } from '@core/services/rooms.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vr-room-create-dialog',
  templateUrl: './room-create-dialog.component.html',
  styleUrls: ['./room-create-dialog.component.scss']
})
export class RoomCreateDialogComponent implements OnInit {
  public RoomType = RoomType;
  public form: FormGroup;

  constructor(private roomsService: RoomsService, @Inject(MAT_DIALOG_DATA) public data: string ) {
    console.log(this.RoomType);
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(),
      type: new FormControl(RoomType.PUBLIC),
      preview: new FormControl(),
      ownerId: new FormControl(data)
    })
  }

  ngOnInit(): void {
  }

  public createRoom():void {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.roomsService.createRoom(this.form.value).subscribe();
  }
}
