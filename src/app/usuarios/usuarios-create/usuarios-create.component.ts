import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.less']
})
export class UsuariosCreateComponent implements OnInit {

  public formGroup: FormGroup;
  movies: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password_confirmation: new FormControl('', Validators.required)
    });
  }

  gotoList() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    ;
    this.userService.save(this.formGroup.value).subscribe(result => {
      ;
      this.gotoList();
      console.log(result)
    }, error => console.error(error));
  }

}
