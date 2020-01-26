import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Buttons} from './common/button/buttons.component';
import {Icons} from './common/icon/icons.component';
import { Collapses } from './common/collapse/collapses.component';


const routes: Routes = [
  { path: 'buttons',  component: Buttons, data: { animation: 'buttons' } },
  { path: 'collapses',  component: Collapses, data: { animation: 'collapses' } },
  { path: 'icons',  component: Icons, data: { animation: 'icons' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
