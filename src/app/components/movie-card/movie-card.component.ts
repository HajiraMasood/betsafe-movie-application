import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
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
