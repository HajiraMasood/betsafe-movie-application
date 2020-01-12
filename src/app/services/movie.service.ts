import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Observable } from 'rxjs';
import { OmdbSearchResponse } from '../models/OmdbSearchResponse';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movieUrl = 'http://www.omdbapi.com/?apikey=f79aeba3&';
  movieSearchLitral = 'type="movie"&s=';
  paging = '&page=';
  movieDetailLitral = 'i=';


  constructor(private http: HttpClient ) { }

  getMovies(searchString: string, page: number) {
      if (page === 0) {
        return this.http.get<OmdbSearchResponse>(`${this.movieUrl}${this.movieSearchLitral}${searchString}`);
      } else {
        return this.http.get<OmdbSearchResponse>(`${this.movieUrl}${this.movieSearchLitral}${searchString}${this.paging}${page}`);

      }
    }

  getMovieDetail(imdbID: string) {
      return this.http.get<Movie>(`${this.movieUrl}${this.movieDetailLitral}${imdbID}`);
    }
}
