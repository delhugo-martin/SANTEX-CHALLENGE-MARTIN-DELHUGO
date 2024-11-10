import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { FindPlayerComponent } from './views/find-player/find-player.component';
import { RegisterPlayerComponent } from './views/register-player/register-player.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AllPlayersComponent } from './views/all-players/all-players.component';
import { EditPlayerComponent } from './views/edit-player/edit-player.component';
import { AuthGuard } from './guards/auth.guard';
import { Auth2Guard } from './guards/auth2.guard';
export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[Auth2Guard] },
  {
    path: 'find_the_player',
    component: FindPlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update_player/:id',
    component: EditPlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register_player',
    component: RegisterPlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all_players',
    component: AllPlayersComponent,
   canActivate: [AuthGuard],
  },

  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
