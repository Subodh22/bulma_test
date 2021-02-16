import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlayercheckerService} from '../../playerchecker.service';
@Component({
  selector: 'app-vid-blue',
  templateUrl: './vid-blue.component.html',
  styleUrls: ['./vid-blue.component.scss']
})
export class VidBlueComponent implements OnInit {
  @Input() v_id:string;
  @Input() name:string;
  @Input() des:string;
  @Input() viewcount:string;
  @Input() duration:string;
  @Input() img:string;

  constructor(private router:Router,
              private rone:PlayercheckerService) { }

  ngOnInit(): void {
  }

  routin(){
    this.rone.checker();

    this.router.navigate(['/watch'],{queryParams: {q:"joi",v_id:"asjdbvob89"}});
  }
}
