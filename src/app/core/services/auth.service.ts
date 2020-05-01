import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { HttpService } from '@core/services/common/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  private url = 'oauth2/authorization/google';

  constructor(private http: HttpService) { }

  public auth(): Observable<any> {
    return this.http.get(this.url);
  }
}
