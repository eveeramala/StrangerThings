import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-movie-poster-card',
  templateUrl: './movie-poster-card.component.html',
  styleUrls: ['./movie-poster-card.component.scss']
})
export class MoviePosterCardComponent implements OnInit {
  @Input() data;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(episode?): void {
    if (this.data.isEpisode) {
      this.dialog.open(MovieDialogComponent, {
        height: '500px',
        width: '800px',
        data: { video: episode['video-embed'], name: episode.name }
      });
    }
  }

}
