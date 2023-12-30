import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import {Page404Component} from "./components/public/page404/page404.component";

const routes: Routes = [

  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path:"private-modules",
    loadChildren: () => import('./components/private/private-modules/private-modules.module').then(m => m.PrivateModulesModule)
  },
  {
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
