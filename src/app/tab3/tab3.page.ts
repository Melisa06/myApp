import { Component, OnInit } from '@angular/core';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  ngOnInit(): void {
    
  }
  videoOptions : VideoOptions;
  videoUrl : string; 


  constructor(private videoPlayer : VideoPlayer){}
  
  /*
  stopvideo(){
    this.videoPlayer.close();
    console.log("the video was stopped");

  }

  videoplayer(){
   /*try{
     this.videoOptions ={
       volume : 0.7
     }

     this.videoUrl = "/assets/video1.mp4";

     setTimeout(() =>{
       this.stopvideo();
     }, 300);
     await this.videoPlayer.play(this.videoUrl, this.videoOptions);
     console.log("video complaated");

   }//cierra try
   catch(e){
      console.error(e);
   } */ 
   /*
   this.videoOptions = {volume : 1.0};
   this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
      console.log('video completed');
     }).catch(err => {
      console.log(err);
     });

  }

  public stopPlayingVideo(){
    this.videoPlayer.close();
}
*/
}
