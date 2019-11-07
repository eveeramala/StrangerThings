import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePosterCardComponent } from './movie-poster-card.component';

describe('MoviePosterCardComponent', () => {
  let component: MoviePosterCardComponent;
  let fixture: ComponentFixture<MoviePosterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePosterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePosterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
