import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomPageRoutingModule } from './room-page-routing.module';
import { RoomPageComponent } from './room-page.component';


@NgModule({
  declarations: [RoomPageComponent],
  imports: [
    CommonModule,
    RoomPageRoutingModule
  ]
})
export class RoomPageModule { }
