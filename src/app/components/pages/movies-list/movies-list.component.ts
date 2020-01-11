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
  noMovies = false;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.searchString = decodeURIComponent(params.get('searchString'));
        return this.movieService.getMovies(params.get('searchString'));
      })
    ).subscribe(res => {
      if (res.Error === 'Movie not found!') {
        this.noMovies = true;
        this.movies = [];
      } else {
        this.noMovies = false;
        this.movies = res.Search;
      }
    });
  }

}
