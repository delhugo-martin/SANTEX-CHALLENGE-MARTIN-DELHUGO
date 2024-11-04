import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { FindPlayerComponent} from './views/find-player/find-player.component';
import { RegisterPlayerComponent } from './views/register-player/register-player.component'
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'find_the_player', component: FindPlayerComponent },
  { path: 'register_player', component: RegisterPlayerComponent },
  { path: 'not_found', component: NotFoundComponent },
  {path:'**', redirectTo:'not_found'}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
