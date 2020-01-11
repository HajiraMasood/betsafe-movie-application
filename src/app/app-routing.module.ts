import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './components/pages/movies-list/movies-list.component';
import { MainComponent } from './components/pages/main/main.component';
import { MovieComponent } from './components/pages/movie/movie.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'movies/:searchString',
    component: MoviesListComponent
  },
  {
    path: 'movie/:imdbID',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
