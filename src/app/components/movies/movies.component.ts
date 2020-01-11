import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[];

  constructor() { }

  ngOnInit() {
  }
}
