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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private serv: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  form_post_player: FormGroup | any;

  ngOnInit() {
    // METODOS DEL FORM ==========================================================
    this.form_post_player = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    }); // form group
  } // NG ONINIT

  login(): void {
    this.serv
      .login({
        username: this.form_post_player.value.username,
        password: this.form_post_player.value.password,
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
  }

  // LOGIN



}////////////
