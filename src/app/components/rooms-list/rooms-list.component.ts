import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '@core/models/room.model';
import { RoomsService } from '@core/services/rooms.service';
import { RoutingConfig } from '@shared/routing-config';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/models/user.model';
import { environment } from '@env/environment';

@Component({
  selector: 'vr-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  public rooms$: Observable<Room[]>
  public routing = RoutingConfig.routes;
  public user$: Observable<User>;

  constructor(private roomsService: RoomsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.rooms$ = this.roomsService.rooms$;
    this.user$ = this.authService.user$;
  }
}
