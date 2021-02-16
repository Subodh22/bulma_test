import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {PlayercheckerService} from '../../playerchecker.service';
@Component({
  selector: 'app-vid-blue',
  templateUrl: './vid-blue.component.html',
  styleUrls: ['./vid-blue.component.scss']
})
export class VidBlueComponent implements OnInit {
  @Input() v_id:string;
  @Input() name:string;

  @Input() viewcount:string;
  @Input() duration:string;
  @Input() img:string;
  queryParam_q:string=" ";

  constructor(private router:Router,
              private rone:PlayercheckerService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params=>
      {
        this.queryParam_q= params['q']


      })
  }

  routin(id){
    this.rone.checker();

    this.router.navigate(['/watch'],{queryParams: {q:this.queryParam_q,v_id:id}}).then(() => {
      window.location.reload();
    });

  }
}
