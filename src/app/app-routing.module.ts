import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';

const routes: Routes = [
  {path: 'movies-list', component: MoviesComponent},
  {path: 'movie', component: MovieComponent},
  // {path: '', redirectTo: 'movies-list'},
  {path: '**', redirectTo: '/movies-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
