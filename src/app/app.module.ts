import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './pages/notes/notes.component';
import { MainComponent } from './pages/main/main.component';
import { NotecardComponent } from './notecard/notecard.component';
import { VidQComponent } from './pages/vid-q/vid-q.component';
import { SearchtabComponent } from './pages/searchtab/searchtab.component';
import { NavComponent } from './pages/nav/nav.component';
import { VidBlueComponent } from './pages/vid-blue/vid-blue.component';

import { VideorecComponent } from './videorec/videorec.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BridgeComponent } from './bridge/bridge.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    MainComponent,
    NotecardComponent,
    VidQComponent,
    SearchtabComponent,
    NavComponent,
    VidBlueComponent,

    VideorecComponent,
    BridgeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent,VidQComponent]
})
export class AppModule { }
