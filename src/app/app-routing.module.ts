import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcHeroesComponent } from './dc-heroes/dc-heroes.component';
import { DcVillainsComponent } from './dc-villains/dc-villains.component';
import { MarvelHeroesComponent } from './marvel-heroes/marvel-heroes.component';
import { MarvelVillainsComponent } from './marvel-villains/marvel-villains.component';


const routes: Routes = [
  { path: 'dc-heroes', component: DcHeroesComponent},
  { path: 'dc-villains', component: DcVillainsComponent},
  { path: 'marvel-heroes', component: MarvelHeroesComponent},
  { path: 'marvel-villains', component: MarvelVillainsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
