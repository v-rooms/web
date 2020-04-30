import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoList } from '../models/video-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private url = 'assets/mocks/video-list.json';

  constructor(private httpClient: HttpClient) { }

  public get videoLists(): Observable<VideoList[]> {
    return this.httpClient.get<VideoList[]>(this.url);
  }
}
