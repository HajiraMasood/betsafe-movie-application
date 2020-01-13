import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { Movie } from 'src/app/models/Movie';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have movies instance of Movie`, async(() => {
    const createComponent = TestBed.createComponent(MoviesListComponent);
    const componentInstance = createComponent.debugElement.componentInstance;
    expect(componentInstance.movies instanceof Movie).toBeTruthy();
  }));

});
