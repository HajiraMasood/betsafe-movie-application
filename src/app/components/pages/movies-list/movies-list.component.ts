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
  math = Math;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
      this.subscription = movieService.nextOrPreviousButtonSet$.subscribe(
        page => {
          this.page = page;
          this.getPageMovies(page);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (this.searchString !== params.get('searchString')) {
          this.clearSearched();
        }
        this.searchString = decodeURIComponent(params.get('searchString'));
        return this.movieService.getMovies(params.get('searchString'), 0);
      })
    ).subscribe(res => {
      if (res.Error === 'Movie not found!') {
        this.clearSearched();
      } else {
        this.movies = res.Search;
        this.pages = Math.ceil(Number(res.totalResults) / 100);
      }
    });
  }

  clearSearched() {
    this.pages = 1;
    this.page = 1;
    this.movies = [];
    this.movieService.resetPageValue(this.page);
  }

  getPageMovies(page: number) {
    this.movieService.getMovies(this.searchString, page).subscribe(res => {
      this.movies = res.Search;
    });
  }

}
