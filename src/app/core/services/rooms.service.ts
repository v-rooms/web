import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CoreModule } from '../core.module';
import { Room } from '../models/room.model';
import { HttpService } from './common/http.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: CoreModule
})
export class RoomsService {
  private url = 'api/v1/rooms';

  constructor(private http: HttpService, private httpClient: HttpClient) { }

  public get rooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url).pipe(catchError(err => this.roomsCatchError));
  }

  private get roomsCatchError(): Observable<any> {
    // mock data for remove
    return this.httpClient.get('assets/mocks/video-list.json');
  }
}
