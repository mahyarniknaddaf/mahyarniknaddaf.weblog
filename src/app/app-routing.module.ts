import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/body/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,title:"Home"},
  { path: 'notfound', component: NotfoundComponent ,title:"NotFoundPage"},
  { path: '**', redirectTo: 'notfound' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
