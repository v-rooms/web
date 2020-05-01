import { Component, Input } from '@angular/core';
import { Room } from '@core/models/room.model';

@Component({
  selector: 'vr-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() public room: Room;
}
