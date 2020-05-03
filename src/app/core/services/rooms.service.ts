import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CoreModule } from '../core.module';
import { Room } from '../models/room.model';
import { HttpService } from './common/http.service';
import { filter, finalize, switchMap } from 'rxjs/operators';
import { WebSocketService } from '@core/services/common/web-socket.service';
import { environment } from '@env/environment';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: CoreModule
})
export class RoomsService {
  private url = 'api/v1/rooms';

  constructor(private ws: WebSocketService, private http: HttpService) { }

  public get rooms$(): Observable<any> {
    const subject = new Subject();
    let stompClient: Stomp.Client;
    return this.ws.connect().pipe(filter(Boolean)).pipe(switchMap((client: Stomp.Client) => {
      stompClient = client;
      stompClient.subscribe(environment.ws.rooms.fTopic, frame => {
        subject.next(frame.body ? JSON.parse(frame.body) : null)
      })
      this.ws.send(environment.ws.rooms.bTopic, '');
      return subject;
    })).pipe(finalize(() => stompClient.disconnect(() => {})))
  }

  public createRoom(room: Room): Observable<void> {
    return this.http.post<Room>(this.url, room);
  }
}
