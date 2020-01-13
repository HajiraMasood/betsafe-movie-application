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
  items: number[] = [];

  constructor(private movieService: MovieService) {
    movieService.resetPage$.subscribe(
      page => {
        this.page = page;
      });
  }

  ngOnInit() {
    for (let i = 1; i <= this.pages; i++) {
      this.items.push(i);
    }
  }

  pageUpdate(page: number) {
    this.page = page;
    this.movieService.updatePageMovies(this.page);
  }

  createRange() {

  }
}
