import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  isMovie: boolean;
  isSeries: boolean;

  constructor() { }

  ngOnInit() {
    if (this.movie.Type === 'series') {
      this.isSeries = true;
    } else if ( this.movie.Type === 'movie') {
      this.isMovie = true;

    }
  }

}
