import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: SharedModule) {
    if (parentModule) {
      throw new Error('SharedModule is already loaded. Import it in the AppModule only');
    }
  }
}
