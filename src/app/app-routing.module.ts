import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotesComponent } from './pages/notes/notes.component';
import { VidQComponent } from './pages/vid-q/vid-q.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {
      path:'',component:NotesComponent
    }
  ]},{path:'search',component:VidQComponent},
  {path:'watch',component:VideoplayerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
