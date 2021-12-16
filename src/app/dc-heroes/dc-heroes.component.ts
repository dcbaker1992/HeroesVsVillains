import { Component, OnInit } from '@angular/core';
import { Characters } from '../characters';

@Component({
  selector: 'app-dc-heroes',
  templateUrl: './dc-heroes.component.html',
  styleUrls: ['./dc-heroes.component.css']
})
export class DcHeroesComponent implements OnInit {
  characters: Characters = new Characters();
  constructor() { }

  buttonVisible: Boolean = false;

  ngOnInit(): void {
  }

}
