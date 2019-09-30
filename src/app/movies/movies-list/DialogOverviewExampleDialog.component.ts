import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReservasService } from '@app/_services/reservas.service';
import { DialogData } from './movies-list.component';
import { Inject, Component } from '@angular/core';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class DialogOverviewExampleDialog {
  
    public formGroup: FormGroup;
    message: any;
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder, private reservaService: ReservasService) { }
  
    ngOnInit() {
      this.buildForm();
    }
  
    private buildForm() {
      this.formGroup = this.formBuilder.group({
        cedula: new FormControl('', Validators.required),
        correo: new FormControl('', Validators.required),
        nombre: new FormControl('', Validators.required),
        movie_id: new FormControl(this.data.idMovie, Validators.required),
        fecha_reserva: new FormControl('', Validators.required),
      });
    }
    onClick(): void {
      this.reservaService.save(this.formGroup.value).subscribe(result => {
        ;
        console.log(result)
        this.dialogRef.close();
      }, error => {
        this.message = error.error;
        console.error(error.error.message)
      }
      );
  
    }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }
  
  }