import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vid-blue',
  templateUrl: './vid-blue.component.html',
  styleUrls: ['./vid-blue.component.scss']
})
export class VidBlueComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routin(){
    this.router.navigate(['/watch'],{queryParams: {q:"joi",v_id:"asjdbvob89"}});
  }
}
