import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component';
import { MoviesCreateComponent } from './movies/movies-create/movies-create.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'crearusuario', component: UsuariosCreateComponent },
    { path: 'movies',        component: MoviesCreateComponent },
    { path: 'reservas',  component: ReservasListComponent  },
    { path: 'ListMovies',       component: MoviesListComponent,
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);