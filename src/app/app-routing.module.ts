import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppResolverService } from './app.resolver';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", resolve: { res: AppResolverService }, component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
