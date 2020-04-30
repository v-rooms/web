import { Component, OnInit } from '@angular/core';
import { VideoListService } from '../../core/services/video-list.service';
import { Observable } from 'rxjs';
import { VideoList } from '../../core/models/video-list.model';

@Component({
  selector: 'vr-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public videoList$: Observable<VideoList[]>

  constructor(private videoListService: VideoListService) { }

  ngOnInit(): void {
    this.videoList$ = this.videoListService.videoLists;
  }

}
