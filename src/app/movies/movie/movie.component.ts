import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { MatDialog } from '@angular/material';
import { MovieDialogComponent } from 'src/app/shared/movie-dialog/movie-dialog.component';
import { LanguageService } from 'src/app/shared/services/lang-service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: any;
  config: any;

  constructor(private movieService: MovieService, public dialog: MatDialog, private langService: LanguageService) { }

  getData() {
    this.movieService.getAllData().then((response) => {
      this.movie = JSON.parse(response);
      this.movie['episode-list'] = this.movie['episode-list'].map(episode => {
        // tslint:disable-next-line: no-string-literal
        episode['isEpisode'] = true;
        this.changeTab();
        return episode;
      });
    });
  }
  ngOnInit() {
    this.getData();
    this.langService.getObs()
      .subscribe(d => this.getData());
  }
  openDialog(episode?): void {
    this.dialog.open(MovieDialogComponent, {
      height: '500px',
      width: '800px',
      data: { video: episode ? episode['video-embed'] : this.movie['video-embed'], name: episode ? episode.name : this.movie.heading }
    });
  }
  changeTab() {
    this.config = {
      direction: 'horizontal',
      slidesPerView: 4,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        hideOnClick: false
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
      spaceBetween: 20
    }
  }
}