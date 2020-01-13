import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/Movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];
  searchString: string;
  pages = 1;
  page = 1;
  subscription: Subscription;
  movieError: boolean;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
      this.subscription = movieService.nextOrPreviousButtonSet$.subscribe(
        page => {
          this.page = page;
          this.getMovies(this.searchString, page);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const toSearch: string = params.get('searchString');
      if (this.searchString !== toSearch) {
        this.clearSearched();
      }
      this.searchString = decodeURIComponent(toSearch);
      this.getMovies(toSearch, 0);
    });
  }

  clearSearched() {
    this.pages = 1;
    this.page = 1;
    this.movies = [];
    this.movieError = false;
    this.movieService.resetPageValue(this.page);
  }

  getMovies(searchString: string, page: number) {
    this.movieService.getMovies(searchString, page).subscribe(res => {
      if (res.Error === 'Movie not found!') {
        this.movieError = true;
      } else {
        this.movieError = false;
        this.movies = res.Search;
        this.pages = Math.ceil(Number(res.totalResults) / 100);
      }
    });
  }

}
