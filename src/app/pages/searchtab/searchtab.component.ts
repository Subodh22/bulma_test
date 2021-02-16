import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from 'src/app/sender.service';

@Component({
  selector: 'app-searchtab',
  templateUrl: './searchtab.component.html',
  styleUrls: ['./searchtab.component.scss']
})
export class SearchtabComponent implements OnInit {


  constructor(private Auth:SenderService,private route:Router) { }
  datapoints=[]
  ngOnInit(): void {
  }

  search_on(data)
  {
    const searcher=
    {
      "name":data.value
    };
     this.Auth.getsearchquery(searcher);

     this.route.navigate(['']);


  }


}
