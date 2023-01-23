import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
  { path: '', title: 'Movies Search', component: MovieSearchComponent },
  { path: 'favorites', title: 'Favorites', component: FavoritesComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
