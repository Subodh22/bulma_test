
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,Renderer2
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SenderService } from "src/app/sender.service";
import { PlayercheckerService} from '../../playerchecker.service';


@Component({
    selector: 'app-vid-q',
    templateUrl: './vid-q.component.html',
    styleUrls: ['./vid-q.component.scss']
  })
export class VidQComponent implements AfterViewInit, OnDestroy,OnInit{
  @ViewChild("demoYouTubePlayer") demoYouTubePlayer: ElementRef<HTMLDivElement>;
  @ViewChild("player") player: ElementRef<HTMLDivElement>;
  @ViewChild("genny") genny: ElementRef<HTMLDivElement>;
  queryParam_q:string=" ";
  queryParam_playerid:string=" ";
  videos = "qdIBGoO6pMk";
  videoWidth: number | undefined;
  videoHeight: number | undefined;
  topics=[];
  videos_id=[];
  constructor(private _changeDetectorRef: ChangeDetectorRef,
    private renderer:Renderer2,
    private route:ActivatedRoute,
    private vivi:PlayercheckerService,
    private sendi:SenderService
    ) {}
    ngOnInit(){

    }
  ngAfterViewInit(){
    this.onResize();
    // document.querySelector("#genny").scrollIntoView({ behavior: "smooth", block: "start" });
    // // this.genny.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    this.route.queryParams.subscribe(params=>
      {
        this.queryParam_q= params['q']
        this.queryParam_playerid=params['v_id']

      })


      this.loader(this.queryParam_playerid);
      this.load_vide(this.queryParam_q);
      window.addEventListener("resize", this.onResize);
      document.querySelector("#genny").scrollIntoView({ behavior: "smooth", block: "start" });

    // document.querySelector("#genny").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  load_vide(q)
  {
    console.log(q);
  this.sendi.get_player(q).subscribe((data)=>
  {
    console.log(data)
    this.topics=data["user"]["records"];
    this.videos_id=data["vid_di"]["records"];
    console.log(this.topics);
    console.log(this.videos_id);
  })
  }
  loader(ii)
  {


    if(ii!=null)
    {
      this.renderer.setStyle(this.player.nativeElement,'display','block');

    }

    else{
      this.renderer.setStyle(this.player.nativeElement,'display','none');
    }
    console.log(this.genny);
    //

  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(
      this.demoYouTubePlayer.nativeElement.clientWidth,
      window.innerWidth
    );
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {

    window.removeEventListener("resize", this.onResize);
  }
}
