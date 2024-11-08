import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { FindPlayerComponent} from './views/find-player/find-player.component';
import { RegisterPlayerComponent } from './views/register-player/register-player.component'
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AllPlayersComponent } from './views/all-players/all-players.component';
import { EditPlayerComponent } from './views/edit-player/edit-player.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'find_the_player', component: FindPlayerComponent,
    children:[
    ],
  },
  { path: 'update_player/:id', component: EditPlayerComponent },
  { path: 'register_player', component: RegisterPlayerComponent },
  { path: 'all_players', component: AllPlayersComponent },


  { path: 'not_found', component: NotFoundComponent },
  {path:'**', redirectTo:'not_found'}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
