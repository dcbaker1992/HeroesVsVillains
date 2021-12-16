import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hero-vs-villains';
  currentRoute: string;
  menuToggle: Boolean = false;
  isMarvel: Boolean;
  router: Router;

  constructor(public r: Router) {
    this.router = r;
    this.isMarvel = this.checkMarvel();

    this.router.events.subscribe(v => this.isMarvel = this.checkMarvel());
  }

  checkMarvel(): Boolean {
    return ['/marvel-heroes', '/marvel-villains'].includes(this.router.url);
  }

  ngOnInit(): void {
    console.log(this.isMarvel);
  }

  switchComicPage() {    
    this.router.navigate(this.isMarvel ? ['/dc-heroes'] : ['/marvel-heroes']);
  }
}
