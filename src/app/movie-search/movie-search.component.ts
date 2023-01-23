import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../entities/movie.entity';
import { MovieService } from '../services/movie.service';
import { add } from '../stores/favorites/actions';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent {
  searchedMovie: Movie = new Movie();
  loading = false;
  favorites$: Observable<string[]> = this.store.select('favorites');

  constructor(
    private movieService: MovieService,
    private store: Store<{ favorites: string[] }>
  ) {}

  getMovieByName(name: string): void {
    this.loading = true;
    if (!name) {
      this.searchedMovie = new Movie();
      this.loading = false;
      return;
    } else {
      this.searchedMovie = new Movie();
      this.movieService.getMovieByName(name).subscribe((movie) => {
        Object.assign(this.searchedMovie, {
          ...movie,
          imdbRating: Number(movie.imdbRating),
        });
        this.loading = false;
      });
    }
  }

  addMovieToFavorites(id: string) {
    this.store.dispatch(add({ id }));
  }
}
