import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private message= new Subject<any>();
  private vid_dets=new Subject<any>();
  // private posts=[];
  constructor(private http:HttpClient
   ) { }
  private record;


  getpostUpdate(){

     return this.message.asObservable();
  }

  getsearchquery(search_quer)
  {

    this.http.post("/test_api/neo4j_post",search_quer).subscribe(data => {
      this.message.next(data);
  });

  }

  get_player(topic)
  {
    var params= new HttpParams();
    params=params.set('topic',topic);

   return this.http.get("/test_api/find_player",{params:params});
  }


}
