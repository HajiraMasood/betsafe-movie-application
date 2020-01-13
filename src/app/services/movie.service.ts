import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Observable, Subject } from 'rxjs';
import { OmdbSearchResponse } from '../models/OmdbSearchResponse';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movieUrl = 'http://www.omdbapi.com/?apikey=f79aeba3&';
  movieSearchLitral = 'type="movie"&s=';
  paging = '&page=';
  movieDetailLitral = 'i=';

  private nextOrPreviousButtonSet = new Subject<number>();
  private resetPage = new Subject<number>();

  nextOrPreviousButtonSet$ = this.nextOrPreviousButtonSet.asObservable();
  resetPage$ = this.resetPage.asObservable();

  constructor(private http: HttpClient ) { }

  getMovies(searchString: string, page: number) {
    let baseUrl = `${this.movieUrl}${this.movieSearchLitral}${searchString}`;
    if (page !== 0) {
      baseUrl = baseUrl + this.paging + page;
    }
    return this.http.get<OmdbSearchResponse>(baseUrl);
  }

  getMovieDetail(imdbID: string) {
      return this.http.get<Movie>(`; $; {this.movieUrl; }$; {this.movieDetailLitral; }$; {imdbID; }`);
  }

  updatePageMovies(page: number) {
    this.nextOrPreviousButtonSet.next(page);
  }

  resetPageValue(page: number) {
    this.resetPage.next(page);
  }
}
