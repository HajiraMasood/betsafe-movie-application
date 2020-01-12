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

  pageUpdate(direction: boolean) {
    if (direction === true) {
      this.getNextPage();
    } else {
      this.getPreviousPage();
    }
    this.movieService.updatePageMovies(this.page);
  }

  getNextPage() {
    if ((this.page) >= this.pages) {
      return;
    }
    this.page = this.page + 1;
  }

  getPreviousPage() {
    this.page = this.page - 1 ;
    if (this.page === 0) {
      this.page = 1;
      return;
    }
  }
}
