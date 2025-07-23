import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'xv-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  routes: Routes = [
    {
      title: 'Home',
      path: '',
    },
    {
      title: 'About',
      path: '/about',
    },
  ];

  constructor() {
    console.log(this.routes);
  }
}
