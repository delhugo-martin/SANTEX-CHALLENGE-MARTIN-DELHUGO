import { Component } from '@angular/core';
import { RegisterPlayerService } from '../../services/register-player.service';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule , NgIf} from '@angular/common';


@Component({
  selector: 'app-register-player',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register-player.component.html',
  styleUrl: './register-player.component.css'
})
export class RegisterPlayerComponent {

  constructor(private service:RegisterPlayerService, private formBuilder:FormBuilder){ }
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
  //birthday :["", Validators.required],
  height_cm :["", Validators.required],
  weigth_kg :["", Validators.required],
  //league_name :["", Validators.required],
  club_name :["", Validators.required],
  jersey_number :["", Validators.required],
  nationality_name :["", Validators.required],
  preferred_foot :["", Validators.required],
  pace :["", Validators.required],
  shooting:["", Validators.required],
  passing:["", Validators.required],
  dribbing :["", Validators.required],
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
/*
get birthdayGET() {
  return this.form_register_player.controls.birthday
}
*/
get height_cmGET() {
  return this.form_register_player.controls.height_cm
}

get weigth_kgGET() {
  return this.form_register_player.controls.weigth_kg
}

get club_nameGET() {
  return this.form_register_player.controls.club_name
}




get jersey_numberGET() {
  return this.form_register_player.controls.jersey_number
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

get dribbingGET() {
  return this.form_register_player.controls.dribbing
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

    this.service.PlayerPOST({
      player_id: this.form_register_player.value.player_id,
      fifa_version: this.form_register_player.value.fifa_version,
      short_name: this.form_register_player.value.short_name,
      long_name: this.form_register_player.value.long_name,
      player_positions: this.form_register_player.value.player_positions,
      overall: this.form_register_player.value.overall,
      potential: this.form_register_player.value.potential,
      age: this.form_register_player.value.age,
      //birthday: this.form_register_player.value.birthday,
      height_cm: this.form_register_player.value.height_cm,
      weigth_kg: this.form_register_player.value.weigth_kg,
      league_name: this.form_register_player.value.league_name,
      club_name: this.form_register_player.value.club_name,
      jersey_number: this.form_register_player.value.jersey_number,
      nationality_name: this.form_register_player.value.nationality_name,
      preferred_foot: this.form_register_player.value.preferred_foot,
      pace: this.form_register_player.value.pace,
      shooting: this.form_register_player.value.shooting,
      passing: this.form_register_player.value.passing,
      dribbing: this.form_register_player.value.dribbing,
      defending: this.form_register_player.value.defending,
      physic: this.form_register_player.value.physic,
      mentality_penalties: this.form_register_player.value.mentality_penalties,
    }
    ).subscribe({
      next:res=> {console.log(res)}
      })

    }else{
    this.form_register_player.markAllAsTouched();
    console.log("algo salio mal")
    console.log(this.form_register_player.console.error()
    )


    }


  } ////////////////////////////






}
