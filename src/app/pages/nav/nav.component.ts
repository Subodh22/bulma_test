import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('butt') butt:ElementRef<HTMLElement>;
  @ViewChild('links') links:ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {

  }
  show_links()
  {
    this.butt.nativeElement.classList.toggle('is-active');
    this.links.nativeElement.classList.toggle('is-active');
  }

}
