import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';
import { Frame, Message } from 'stompjs';
import { CoreModule } from '@core/core.module';


@Injectable({
  providedIn: CoreModule
})
export class WebSocketService {
  private webSocketEndPoint: string = environment.ws.url;
  stompClient: Stomp.Client;

  constructor() {
  }

  public connect(): Observable<Stomp.Client> {
    const subject = new Subject<Stomp.Client>();
    console.log(this.webSocketEndPoint);
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({}, () => {
      subject.next(this.stompClient);
    }, error => this.errorCallBack(error));

    return subject;
  }

  public disconnect(): void {
    if (this.stompClient !== null) {
      this.stompClient.disconnect(() => {
      });
    }
  }

  public send<T>(topic: string, message: T): void {
    this.stompClient.send(topic, {}, JSON.stringify(message));
  }

  errorCallBack(error: string | Frame): void {
    console.log('errorCallBack -> ' + error);
    setTimeout(() => {
      this.connect();
    }, 5000);
  }
}
