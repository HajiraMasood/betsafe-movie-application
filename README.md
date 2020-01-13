# MovieApplicationnBetsafe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22 as a test project for Betsafe.

## Application contains the below features:

- Movies Search
	- List movies coming from search result - Title, Year, Type, Poster
	- Clicking on a particular movie redirects to the selected movie detail page
- Movie detail
	- Selected movie detail information - Title, Year, Type, Poster, Plot, IMDB rating, Runtime, Genre is shown
	- Navigating back to movie list. Previous search & results are visible

Test:
  - There is test in every component and one custom test is added in movie-list component.

Pages have proper urls and navigation works as expected:
	- using the back and forward button of the browser takes to the correct page
	- reloading the current page works as expected


## Technologies Used

	- [Angular](https://angular.io/)
	- [TypeScript](https://www.typescriptlang.org/)
	- [Rxjs](https://github.com/ReactiveX/rxjs)
	- [Sass](http://sass-lang.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Bootswatch](https://bootswatch.com/) for Used Sandstone as template for UI.
  - [Fontawesome](https://www.npmjs.com/package/font-awesome) for movie and search icons
  - [Karma](https://karma-runner.github.io).)
	- State management is applied using the recommended method by : https://angular.io/guide/
  component-interaction#parent-and-children-communicate-via-a-service

## Content
	- Content is fetched from - http://www.omdbapi.com/ Using `f79aeba3` API key 

## Deploying
  - Clone directory and run `npm install` by getting into the project directory 
  - Run `ng build` to build the project.
  - Run `ng serve --open` to run server, will open browser with `http://localhost:4200/` URl.


## Unit tests 
  - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).).
