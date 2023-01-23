import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() movieName = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  searchForm = this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  search(): void {
    if (this.searchForm.value.name) {
      this.movieName.emit(this.searchForm.value.name);
    }
  }

  reset(): void {
    this.searchForm.reset();
    this.movieName.emit('');
  }
}
