import { Component, OnInit } from '@angular/core';
import { Characters } from '../characters';

@Component({
  selector: 'app-marvel-villains',
  templateUrl: './marvel-villains.component.html',
  styleUrls: ['./marvel-villains.component.css']
})
export class MarvelVillainsComponent implements OnInit {

  constructor() { }
  characters: Characters = new Characters();
  ngOnInit(): void {
  }

}
