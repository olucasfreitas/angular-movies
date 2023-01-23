import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { favoritesReducer } from './stores/favorites/reducer';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    FavoritesComponent,
    HeaderComponent,
    SearchFormComponent,
    InfoSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ favorites: favoritesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
