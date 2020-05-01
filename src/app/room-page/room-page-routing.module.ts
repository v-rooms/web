import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomPageComponent } from './room-page.component';

const routes: Routes = [
  {
    path: '',
    component: RoomPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomPageRoutingModule { }
