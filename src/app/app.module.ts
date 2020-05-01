import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { RoomComponent } from './components/room/room.component';
import { RoomCreateComponent } from './components/room-create/room-create.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RoomsListComponent, RoomComponent, RoomCreateComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot(), SharedModule.forRoot(), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
