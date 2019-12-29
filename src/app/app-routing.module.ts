import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Buttons} from './common/button/buttons.component';
import {Icons} from './common/icon/icons.component';


const routes: Routes = [
  { path: 'buttons',  component: Buttons, data: { animation: 'buttons' } },
  { path: 'icons',  component: Icons, data: { animation: 'icons' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
