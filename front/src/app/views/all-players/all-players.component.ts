import { Component, OnInit } from '@angular/core';
import { AllPlayersService } from '../../services/all-players.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import * as XLSX from 'xlsx';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-all-players',
  standalone: true,
  imports: [NgFor, NgxPaginationModule, ReactiveFormsModule],

  templateUrl: './all-players.component.html',
  styleUrl: './all-players.component.css',
})
export class AllPlayersComponent {
  constructor(private serv: AllPlayersService, private http: HttpClient, private formBuilder:FormBuilder) {} // END CONSTRUCTOR

  p: number = 1;
  players: any;
  player: any;
  form_search: FormGroup|any

  ngOnInit(): void {
    this.getPlayers();

    this.form_search =  this.formBuilder.group({
      filtroControl:["", Validators.required],
      search:["", Validators.required],
    })

  } // END NG

  // GET PLAYERS
  getPlayers() {
    this.serv.PlayersGET().subscribe(
      (data: any) => {
        this.players = data;
      },
      (error) => {
      }
    );
  }

    // GET PLAYERS SHORT NAME
    getPlayersByShortName(short_name:any) {
      this.serv.PlayerByShortNameGET(short_name).subscribe(
        (data: any) => {
          this.players = data;
          console.log(this.player)
        },
        (error) => {
        }
      );
    }

        // GET PLAYERS CLUBNAME
        getPlayersByClubName(short_name:any) {
          this.serv.PlayerByClubNameGET(short_name).subscribe(
            (data: any) => {
              this.players = data;
              console.log(this.player)
            },
            (error) => {
            }
          );
        }

        // GET PLAYERS LEAGUE NAME
        getPlayersByLeagueName(short_name:any) {
          this.serv.PlayerByLeagueNameGET(short_name).subscribe(
            (data: any) => {
              this.players = data;
              console.log(this.player)
            },
            (error) => {
            }
          );
        }

        // GET PLAYERS LEAGUE NAME
        getPlayersByAge(short_name:any) {
          this.serv.PlayerByAgeGET(short_name).subscribe(
            (data: any) => {
              this.players = data;
              console.log(this.player)
            },
            (error) => {
            }
          );
        }

  // FIND PLAYER BOTON
  find_player(){
    if(this.form_search.value.filtroControl=== "short_name"){
    this.getPlayersByShortName(this.form_search.value.search)
  }else if (this.form_search.value.filtroControl=== "age"){
    this.getPlayersByAge(this.form_search.value.search)
  }else if (this.form_search.value.filtroControl=== "club_name"){
    this.getPlayersByClubName(this.form_search.value.search)
  } else if (this.form_search.value.filtroControl=== "league_name"){
    this.getPlayersByLeagueName(this.form_search.value.search)
  }


  }///

  // DOWNLOAD CSV ==========================

  fileName = 'playersCSV.csv';
  downloadCSV() {
   let data = document.getElementById('playersCSV');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws);

    XLSX.writeFile(wb, this.fileName);
  }
} ///////////
