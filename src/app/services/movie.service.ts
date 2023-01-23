import { Injectable } from '@angular/core';
import { Movie } from '../entities/movie.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'https://www.omdbapi.com/?apikey=84cc4958';

  constructor(private http: HttpClient) {}

  getMovieByName(name: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}&t=${name}`);
  }

  getMovieByImdbId(imdbId: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}&i=${imdbId}`);
  }
}
