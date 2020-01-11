import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() searchString: string;
  invalidInput = false;
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  findMovies() {
    if (this.searchString && this.searchString.length >= 3) {
      this.invalidInput = false;
      this.router.navigate(['movies', this.searchString]);
    } else {
      this.invalidInput = true;
    }
  }

}
