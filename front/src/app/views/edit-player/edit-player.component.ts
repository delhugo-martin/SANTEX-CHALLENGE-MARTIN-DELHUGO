import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, RouterOutlet } from '@angular/router';
import { EditPlayerService } from '../../services/edit-player.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  NgModel,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [NgFor, NgIf , ReactiveFormsModule, RouterOutlet, FormsModule],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css',
})
export class EditPlayerComponent {
  constructor(
    private routerAct: ActivatedRoute,
    private router: Router,
    private serv: EditPlayerService,
    private formBuilder: FormBuilder
  ) {}

  // VARIABLES
  public dataid: any;
  public player: any;
  public form_put: FormGroup | any;

  // NG ONINIT //////////////////////////////////////////////
  ngOnInit(): void {
    // get ir params
    this.routerAct.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']('id');
      console.log('El id es:' + this.dataid);
    });

    // form
    this.form_put = this.formBuilder.group({
      club_name :["", Validators.required],
      league_name :["", Validators.required],
      pace :["", Validators.required],
      shooting:["", Validators.required],
      passing:["", Validators.required],
      dribbling :["", Validators.required],
      defending :["", Validators.required],
      physic :["", Validators.required],
      mentality_penalties :["", Validators.required],


    });
    this.getPlayerById()

  } //  CIERRA ONINIT

  // GETS
  get club_nameGET(){
    return this.form_put.controls.club_name
  }
  get league_nameGET(){
    return this.form_put.controls.league_name
  }
  get paceGET(){
    return this.form_put.controls.pace
  }
  get dribblingGET(){
    return this.form_put.controls.dribbling
  }
  get shootingGET(){
    return this.form_put.controls.shooting
  }
  get passingGET(){
    return this.form_put.controls.passing
  }
  get defendingGET(){
    return this.form_put.controls.defending
  }
  get physicGET(){
    return this.form_put.controls.physic
  }
  get mentality_penaltiesGET(){
    return this.form_put.controls.mentality_penalties
  }



// METODOS API
  getPlayerById(){
    this.serv.PlayerByIdGET(this.dataid).subscribe(
      (data:any)=>{ this.player = data[0], console.log(this.player)},
      (error:any)=>{ console.log(error)}
    )
  }


  putPlayer() {
    this.serv.PlayerPUT(this.player

    ).subscribe(
      (data:any)=> {
        alert("Datos actualizados")
      this.router.navigate(["/find_the_player"])

      },
      (error:any)=> {console.log(error)}

    )
  }
} ////////////////////////////
