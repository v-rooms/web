import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '@core/models/room.model';
import { RoomsService } from '@core/services/rooms.service';
import { RoutingConfig } from '@shared/routing-config';

@Component({
  selector: 'vr-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  public rooms$: Observable<Room[]>
  public routing = RoutingConfig.routes;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.rooms$ = this.roomsService.rooms;
  }
}
