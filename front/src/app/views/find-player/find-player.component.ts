import { Component, OnInit } from '@angular/core';
import { FindPlayerService } from '../../services/find-player.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-find-player',
  standalone: true,
  imports: [NgFor],
  templateUrl: './find-player.component.html',
  styleUrl: './find-player.component.css'
})
export class FindPlayerComponent {
  constructor(private serv :FindPlayerService, private http:HttpClient){} // END CONSTRUCTOR

  players:any

  ngOnInit(): void {
    this.getPlayers()





  }// END NG

  getPlayers(){
    this.serv.PlayersGET().subscribe(
      (data:any)=>{
        this.players = data
        console.log("estos son los players");
        console.log(data);
      },
      (error) => {
        console.log("ERROR EN LA CARGA DE LOS JUGADORES")
        console.log(error);

      }

    )

  }



}///////////////////////////////////////////////////////////////////////////////
