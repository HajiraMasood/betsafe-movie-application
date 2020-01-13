import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { MovieService } from 'src/app/services/movie.service';
import { of, Subject, Observable } from 'rxjs';
import { OmdbSearchResponse } from 'src/app/models/OmdbSearchResponse';
import { MoviesComponent } from '../../movies/movies.component';
import { HeaderComponent } from '../../header/header.component';
import { PaginationComponent } from '../../pagination/pagination.component';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let mockMovieService;
  const routeSubject = new Subject<ParamMap>();

  beforeEach(async(() => {
    mockMovieService = jasmine.createSpyObj(['getMovies', 'nextOrPreviousButtonSet$', 'resetPage$', 'resetPageValue']);
    (mockMovieService as any).nextOrPreviousButtonSet$ = (new Subject<number>()).asObservable();
    (mockMovieService as any).resetPage$ = (new Subject<number>()).asObservable();
    (mockMovieService as any).resetPageValue.and.returnValue(undefined);
    const mockApiResponse: OmdbSearchResponse = {
      Search: [],
      totalResults: '0',
      Error: 'Movie not found!',
      Response: 'false'
    };
    (mockMovieService as any).getMovies.and.returnValue(of(mockApiResponse));

    TestBed.configureTestingModule({
      declarations: [ MoviesListComponent, MoviesComponent, HeaderComponent, PaginationComponent, MovieCardComponent, SearchBarComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: routeSubject.asObservable(),
          }
        },
        {
          provide: MovieService,
          useValue: mockMovieService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should call movie service with correct search string and page when called`, async(() => {
    const mockApiResponse: OmdbSearchResponse = {
      Search: [{
        Title: 'movie',
        imdbID: '1234',
        Type: 'movie',
        Poster: 'https://placehold.it/100x100'
      }],
      totalResults: '1',
      Error: '',
      Response: 'true'
    };
    (mockMovieService as any).getMovies.and.returnValue(of(mockApiResponse));
    routeSubject.next(convertToParamMap({ searchString: 'mov' }));
    fixture.detectChanges();
    expect((mockMovieService as any).getMovies).toHaveBeenCalledWith('mov', 0);
  }));

});
