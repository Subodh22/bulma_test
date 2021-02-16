import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-videorec',
  templateUrl: './videorec.component.html',
  styleUrls: ['./videorec.component.scss']
})
export class VideorecComponent implements OnInit {
  @Input() v_id:string;
  @Input() name:string;
  @Input() des:string;
  @Input() viewcount:string;
  @Input() duration:string;
  @Input() img:string;
  @Input() data:string;

  constructor() { }

  ngOnInit(): void {

  }

}
