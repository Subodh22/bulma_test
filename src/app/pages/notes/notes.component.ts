import { Component, OnDestroy, OnInit } from '@angular/core';
import { SenderService } from 'src/app/sender.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit,OnDestroy {

  constructor(private aoi:SenderService) { }
  posts=[]
  private postssub:Subscription;
  ngOnInit() {

   this.postssub= this.aoi.getpostUpdate().subscribe((data)=>
    {
      this.posts=data;
      console.log(this.posts);
    })
  }
  ngOnDestroy(){
    this.postssub.unsubscribe();
  }

}
