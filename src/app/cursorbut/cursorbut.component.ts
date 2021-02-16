import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursorbut',
  templateUrl: './cursorbut.component.html',
  styleUrls: ['./cursorbut.component.scss']
})
export class CursorbutComponent implements OnInit {
  @Input() id_name:string;
  @Input() button_name:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  routing(topicname){
    this.router.navigate(['/search'],{queryParams: {q:topicname}}).then(() => {
      window.location.reload();
    });
  }

}
