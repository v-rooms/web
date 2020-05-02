import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WebsocketModule } from '@core/modules/websocket';
import { environment } from '@env/environment';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    WebsocketModule.config({
      url: environment.ws
    })
  ],
  exports: [
    HttpClientModule,
    WebsocketModule
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
