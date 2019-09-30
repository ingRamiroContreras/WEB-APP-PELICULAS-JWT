import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component'
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatGridListModule, MatNativeDateModule, MatSidenavModule, MatListModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MoviesCreateComponent } from './movies/movies-create/movies-create.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewExampleDialog } from './movies/movies-list/DialogOverviewExampleDialog.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        MatCardModule, 
        MatIconModule, 
        MatToolbarModule, 
        MatButtonModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatDialogModule, 
        MatGridListModule, 
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        UsuariosCreateComponent,
        MoviesCreateComponent,
        ReservasListComponent,
        MoviesListComponent,
        DialogOverviewExampleDialog
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

        // provider used to create fake backend
        //fakeBackendProvider
    ],entryComponents: [DialogOverviewExampleDialog],
    bootstrap: [AppComponent]
})
export class AppModule { }