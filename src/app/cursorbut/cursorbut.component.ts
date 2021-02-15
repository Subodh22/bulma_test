import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursorbut',
  templateUrl: './cursorbut.component.html',
  styleUrls: ['./cursorbut.component.scss']
})
export class CursorbutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  routing(topicname){
    this.router.navigate(['/search'],{queryParams: {q:topicname}});
  }

}
