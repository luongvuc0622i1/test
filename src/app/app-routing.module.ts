import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotComponent } from './mot/mot.component';
import { HaiComponent } from './hai/hai.component';

const routes: Routes = [
  {
    path: 'mot',
    component: MotComponent
  },
  {
    path: 'hai',
    component: HaiComponent
  },
  {
    path: '**',
    component: MotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
