import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movies.service';
import { LanguageService } from '../shared/services/lang-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any[];

  constructor(private movieService: MovieService, private langService: LanguageService) { }

  getData() {
    this.movieService.getAllData().then((response) => {
      this.movies = [JSON.parse(response)];
    });
  }
  ngOnInit() {
    this.getData();
    this.langService.getObs()
    .subscribe(d => this.getData());
  }

}
