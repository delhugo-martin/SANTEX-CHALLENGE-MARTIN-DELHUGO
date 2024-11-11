import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private serv: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  form_post: FormGroup | any;

  ngOnInit() {
    // METODOS DEL FORM ==========================================================
    this.form_post = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    }); // form group
  } // NG ONINIT

  // FORM ====================
  get usernameGET() {
    return this.form_post.controls.username;
  }
  get passwordGET() {
    return this.form_post.controls.password;
  }


  login(): void {
    if (this.form_post.valid) {
    this.serv.login({
        username: this.form_post.value.username,
        password: this.form_post.value.password,
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(["all_players"])
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this.form_post.markAllAsTouched();
    }

  }

  // LOGIN



}////////////
