import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  @Input()

  customTitle:string;
  // @ViewChild('truncator')truncator:ElementRef<HTMLElement>;
  // @ViewChild('bodyText')bodyText:ElementRef<HTMLElement>;
  constructor(private renderer:Renderer2,
    private router:Router){}



  ngOnInit(): void {
    // let style = window.getComputedStyle(this.bodyText.nativeElement,null);
    // let viewableHeight = parseInt(style.getPropertyValue("height"),10);
    // if(this.bodyText.nativeElement.scrollHeight > viewableHeight)
    // {
    //   this.renderer.setStyle(this.truncator.nativeElement,'display','block');
    // }else{
    //   this.renderer.setStyle(this.truncator.nativeElement,'display','none');
    // }
  }
  routing(topic_name){
    this.router.navigate(['/search'],{queryParams: {q:topic_name}});
  }

}
