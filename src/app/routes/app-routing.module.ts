import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { TesteComponent } from '../components/teste/teste.component';

// const routes: Routes = [];
const routes: Routes = [
  { path:'teste' , component: TesteComponent },
  { path:'' , component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
