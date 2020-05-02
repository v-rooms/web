import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { HttpService } from '@core/services/common/http.service';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { User } from '@core/models/user.model';
import { first, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  private _user$: Subject<User> = new ReplaySubject<User>(1);
 // private url = 'oauth2/authorization/google';
  private url = 'api/v1/users'

  constructor(private http: HttpService) { }

  // public auth(): void {
  //    window.open(environment.url + this.url, '_self');
  // }

  public auth(): Observable<User> {
    return this.http.get<User[]>(this.url).pipe(map(user => this.setUser(user[0]))).pipe(first());
  }

  public get user$(): Observable<User> {
    return this._user$.asObservable();
  }

  private setUser(user: User): User {
    this._user$.next(user);
    return user;
  }
}
