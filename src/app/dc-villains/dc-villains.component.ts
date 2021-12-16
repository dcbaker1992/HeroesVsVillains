import { Component, OnInit } from '@angular/core';
import { Characters } from '../characters';

@Component({
  selector: 'app-dc-villains',
  templateUrl: './dc-villains.component.html',
  styleUrls: ['./dc-villains.component.css']
})
export class DcVillainsComponent implements OnInit {
  characters: Characters = new Characters();
  constructor() { }

  ngOnInit(): void {
  }

}
