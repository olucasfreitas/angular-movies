import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  redirectToFavoriteMovies(): void {
    this.router.navigate(['/favorites']);
  }
  redirectToSearch(): void {
    this.router.navigate(['']);
  }
}
