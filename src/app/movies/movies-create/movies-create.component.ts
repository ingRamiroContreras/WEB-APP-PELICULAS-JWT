import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/_services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {


  public formGroup: FormGroup;
  movies: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router, private moviesService: MoviesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      url_img: new FormControl('', Validators.required),
      dias_presentacion: new FormControl('', Validators.required)
    });
  }
  gotoList() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.moviesService.save(this.formGroup.value).subscribe(result => {
      
      this.gotoList();
      console.log(result)
    }, error => console.error(error));
  }

   // convenience getter for easy access to form fields
   get f() { return this.formGroup.controls; }
}
