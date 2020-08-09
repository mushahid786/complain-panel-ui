import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainFormComponent } from './component/complain-form/complain-form.component';


const routes: Routes = [
  {
    path: "", component: ComplainFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
