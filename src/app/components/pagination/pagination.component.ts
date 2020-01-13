import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})

export class PaginationComponent implements OnInit {
  @Input() page: number ;
  @Input() pages: number;

  constructor(private movieService: MovieService) {
    movieService.resetPage$.subscribe(
      page => {
        this.page = page;
      });
  }

  ngOnInit() {
  }

  pageUpdate(page: number) {
    this.page = page;
    this.movieService.updatePageMovies(this.page);
  }

  createRange() {

  }
}
