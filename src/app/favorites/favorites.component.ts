import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../entities/movie.entity';
import { MovieService } from '../services/movie.service';
import { remove } from '../stores/favorites/actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  movies: Movie[] = [];
  loading = true;
  favorites$: Observable<string[]> = this.store.select('favorites');

  constructor(
    private store: Store<{ favorites: string[] }>,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.favorites$.subscribe((ids) => {
      this.getMovies(ids);
    });
    this.loading = false;
  }

  getMovies(ids: string[]): void {
    ids.forEach((id) => {
      this.movieService.getMovieByImdbId(id).subscribe((movie) => {
        this.movies.push(movie);
      });
    });
  }

  removeMovieFromFavorites(id: string) {
    this.store.dispatch(remove({ id }));
  }
}
