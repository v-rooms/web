import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class HttpService {
  private apiEnv = environment.url;

  constructor(private httpClient: HttpClient) { }

  public get<T>(apiUrl: string): Observable<T> {
    return this.httpClient.get<T>(this.apiEnv + apiUrl);
  }
}
