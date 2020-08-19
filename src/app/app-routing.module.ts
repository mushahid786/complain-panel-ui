import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainFormComponent } from './component/complain-form/complain-form.component';
import { SuccessComponent } from './component/success/success.component';


const routes: Routes = [
  {
    path: "", component: ComplainFormComponent
  },
  {
    path: "success", component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
