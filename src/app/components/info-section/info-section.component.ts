import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/entities/movie.entity';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent {
  @Input() movie: Movie = new Movie();
  @Output() movieIdEmitter = new EventEmitter<string>();
  currentRate = 6;

  emitMovieId(id: string) {
    this.movieIdEmitter.emit(id);
  }
}
