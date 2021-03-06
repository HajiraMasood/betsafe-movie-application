import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
