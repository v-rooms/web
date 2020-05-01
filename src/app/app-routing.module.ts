import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConfig } from '@shared/routing-config';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';

const routes: Routes = [
  {path: '', component: RoomsListComponent},
  {path: RoutingConfig.routes.rooms.path, loadChildren: () => import('./room-page/room-page.module').then(m => m.RoomPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
