import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  @ViewChild('truncator')truncator:ElementRef<HTMLElement>;
  @ViewChild('bodyText')bodyText:ElementRef<HTMLElement>;
  constructor(private renderer:Renderer2,
    private router:Router){}



  ngOnInit(): void {
    let style = window.getComputedStyle(this.bodyText.nativeElement,null);
    let viewableHeight = parseInt(style.getPropertyValue("height"),10);
    if(this.bodyText.nativeElement.scrollHeight > viewableHeight)
    {
      this.renderer.setStyle(this.truncator.nativeElement,'display','block');
    }else{
      this.renderer.setStyle(this.truncator.nativeElement,'display','none');
    }
  }
  routing(){
    this.router.navigate(['/search'],{queryParams: {q:"joi"}});
  }

}
