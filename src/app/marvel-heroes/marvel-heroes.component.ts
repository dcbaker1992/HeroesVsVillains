import { Component, OnInit } from '@angular/core';
import { Characters } from '../characters';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent implements OnInit {
  characters: Characters = new Characters();
  constructor() { }

  ngOnInit(): void {
  }

}
