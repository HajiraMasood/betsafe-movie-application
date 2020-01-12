import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  searchString = '';
  invalidInput = false;
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  navigateToMovies() {
    if (this.searchString && this.searchString.length >= 3) {
      this.invalidInput = false;
      this.router.navigate(['movies', encodeURIComponent(this.searchString)]);
    } else {
      this.invalidInput = true;
    }
  }
}
