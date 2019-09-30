import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from 'src/app/_services/movies.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReservasService } from 'src/app/_services/reservas.service';
import { DialogOverviewExampleDialog } from './DialogOverviewExampleDialog.component';

export interface DialogData {
  idMovie: number;
  nombrePelicula: string;
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Array<any>;
  public formGroup: FormGroup;
  public formGroupReserva: FormGroup;
  events: string[] = [];
  nombrepelicula: string = '';

  constructor(private movieService: MoviesService, public dialog: MatDialog, private formBuilder: FormBuilder,private reservaService: ReservasService) { }

  ngOnInit() {
    this.buildForm();
    this.formGroup = this.formBuilder.group({
      fecha_creacion: new FormControl('', Validators.required),
    });
    this.movieService.getAll().subscribe(
      data => {
        this.movies = data;
      }
    );
  }

  private buildForm() {
    this.formGroupReserva = this.formBuilder.group({
      cedula: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      movie_id: new FormControl('', Validators.required),
      fecha_reserva: new FormControl('', Validators.required),
    });
  }

  openDialog(id: number, nombre: string): void {
    debugger;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: { idMovie: id, nombrePelicula: nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }); 


  }

  getMoviesFecha() {
    this.movies = [];
    this.movieService.getAllFecha(this.formGroup.get('fecha_creacion').value).subscribe(
      data => {
        ;
        this.movies = data;
      }, error => {
         console.log(error)
      }
    );
  }
}
