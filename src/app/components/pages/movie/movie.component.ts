import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  searchString: string;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.movieService.getMovieDetail(params.get('imdbID')))
    ).subscribe(res => {
      this.movie = res;
    });
  }

}
