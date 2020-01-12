import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/Movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];
  searchString: string;
  totalResults: string;
  page = 1;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute ) { }

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
        this.totalResults = res.totalResults;
      }
    });
  }

  clearSearched() {
    this.totalResults = '0';
    this.page = 1;
    this.movies = [];
  }

  getNextPage() {
    if ((this.page * 10) >= (parseInt(this.totalResults, 10) / 10)) {
      return;
    }
    this.page = this.page + 1;
    this.getPageMovies(this.page);
  }

  getPageMovies(page: number) {
    this.movieService.getMovies(this.searchString, page).subscribe(res => {
      this.movies = res.Search;
    });
  }

  getPreviousPage() {
    this.page = this.page - 1 ;
    if (this.page === 0) {
      this.page = 1;
      return;
    }
    this.getPageMovies(this.page);
  }

}
