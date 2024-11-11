import { Component } from '@angular/core';
import { RegisterPlayerService } from '../../services/register-player.service';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule , NgIf} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-player',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register-player.component.html',
  styleUrl: './register-player.component.css'
})
export class RegisterPlayerComponent {

  constructor(private serv:RegisterPlayerService,
    private formBuilder:FormBuilder,
    private router:Router){ }
  form_register_player:FormGroup|any

  ngOnInit(){

// METODOS DEL FORM ==========================================================
  this.form_register_player = this.formBuilder.group({

  player_id: ["", Validators.required],
  fifa_version : ["", Validators.required],
  //fifa_update_date : ["", Validators.required],
  short_name : ["", Validators.required],
  long_name: ["", Validators.required],
  player_positions : ["", Validators.required],
  overall : ["", Validators.required],
  age : ["", Validators.required],
  potential : ["", Validators.required],
  dob :["", Validators.required],
  height_cm :["", Validators.required],
  weight_kg :["", Validators.required],
  league_name :["", Validators.required],
  club_name :["", Validators.required],
  club_jersey_number :["", Validators.required],
  nationality_name :["", Validators.required],
  preferred_foot :["", Validators.required],
  pace :["", Validators.required],
  shooting:["", Validators.required],
  passing:["", Validators.required],
  dribbling :["", Validators.required],
  defending :["", Validators.required],
  physic :["", Validators.required],
  mentality_penalties :["", Validators.required],

})// form group

} // NG ONINIT

// GETTERS VALUE ----------------------

get player_idGET() {
  return this.form_register_player.controls.player_id
}

get fifa_versionGET() {
  return this.form_register_player.controls.fifa_version
}

get short_nameGET() {
  return this.form_register_player.controls.short_name
}

get long_nameGET() {
  return this.form_register_player.controls.long_name
}

get player_positionsGET() {
  return this.form_register_player.controls.player_positions
}

get overallGET() {
  return this.form_register_player.controls.overall
}

get ageGET() {
  return this.form_register_player.controls.age
}

get potentialGET() {
  return this.form_register_player.controls.potential
}

get dobGET() {
  return this.form_register_player.controls.dob
}

get height_cmGET() {
  return this.form_register_player.controls.height_cm
}

get weight_kgGET() {
  return this.form_register_player.controls.weight_kg
}
get league_nameGET() {
  return this.form_register_player.controls.league_name
}


get club_nameGET() {
  return this.form_register_player.controls.club_name
}

get club_jersey_numberGET() {
  return this.form_register_player.controls.club_jersey_number
}

get nationality_nameGET() {
  return this.form_register_player.controls.nationality_name
}

get preferred_footGET() {
  return this.form_register_player.controls.preferred_foot
}

get paceGET() {
  return this.form_register_player.controls.pace
}

get shootingGET() {
  return this.form_register_player.controls.shooting
}


get passingGET() {
  return this.form_register_player.controls.passing
}

get dribblingGET() {
  return this.form_register_player.controls.dribbling
}

get defendingGET() {
  return this.form_register_player.controls.defending
}

get physicGET() {
  return this.form_register_player.controls.physic
}

get mentality_penaltiesGET() {
  return this.form_register_player.controls.mentality_penalties
}



// METODOS API ===============================================================
  PlayerRegister():void{

    if (this.form_register_player.valid){

    this.serv.PlayerPOST({
      player_id: this.form_register_player.value.player_id,
      fifa_version: this.form_register_player.value.fifa_version,
      short_name: this.form_register_player.value.short_name,
      long_name: this.form_register_player.value.long_name,
      player_positions: this.form_register_player.value.player_positions,
      overall: this.form_register_player.value.overall,
      potential: this.form_register_player.value.potential,
      age: this.form_register_player.value.age,
      dob: this.form_register_player.value.dob,
      height_cm: this.form_register_player.value.height_cm,
      weight_kg: this.form_register_player.value.weight_kg,
      league_name: this.form_register_player.value.league_name,
      club_name: this.form_register_player.value.club_name,
      club_jersey_number: this.form_register_player.value.club_jersey_number,
      nationality_name: this.form_register_player.value.nationality_name,
      preferred_foot: this.form_register_player.value.preferred_foot,
      pace: this.form_register_player.value.pace,
      shooting: this.form_register_player.value.shooting,
      passing: this.form_register_player.value.passing,
      dribbling: this.form_register_player.value.dribbling,
      defending: this.form_register_player.value.defending,
      physic: this.form_register_player.value.physic,
      mentality_penalties: this.form_register_player.value.mentality_penalties,
    }
    ).subscribe(
      (data:any)=> {alert("Jugador registrado"),
      this.router.navigate(["/all_players"])},
      //(error)=> {console.log(error)}
      )

    }else{
    this.form_register_player.markAllAsTouched();
    console.log("algo salio mal")


    }


  } ////////////////////////////






}
