import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { from } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/pages/main/main.component';
import { MovieComponent } from './components/pages/movie/movie.component';
import { MoviesListComponent } from './components/pages/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieCardComponent,
    MovieDetailComponent,
    MoviesComponent,
    HeaderComponent,
    MainComponent,
    MovieComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
