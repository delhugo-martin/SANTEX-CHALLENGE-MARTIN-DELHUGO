import { Component, OnInit } from '@angular/core';
import { FindPlayerService } from '../../services/find-player.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Chart, RadarController, registerables } from 'chart.js';
Chart.register(...registerables);
import { CommonModule, NgIf } from '@angular/common';
import {RouterOutlet,Router } from '@angular/router';


@Component({
  selector: 'app-find-player',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule,RouterOutlet],
  templateUrl: './find-player.component.html',
  styleUrl: './find-player.component.css',
})
export class FindPlayerComponent {
  constructor(
    private serv: FindPlayerService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router:Router
  ) {} // END CONSTRUCTOR

  // VARIABLES
  public player: any;
  public form_search: FormGroup | any;

  // CHART
  public chart: any;
  public player_data: any;
  datos: any = {
    labels: [
      'Pace',
      'Shooting',
      'Passing',
      'Dribbling',
      'Physic',
      'Mentality Penalties',
      'Potential',
    ],
    datasets: [],
  };

  // CONGIF CHART
  public config: any = {
    type: 'radar',
    min: 1000,
    max: 1000,
    data: this.datos,
    options: {
      elements: { line: { borderWidth: 3 } },
      scales: {
        r: {
          angleLines: {
            display: false,
          },
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
      layout: {
        padding: 20,
      },
    },
  };

  // NG ON INIT //////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    // form
    this.form_search = this.formBuilder.group({
      search: ['', Validators.required],
    });
    // chart
    //this.chart = new Chart('estadis_chart', this.config);
  } // END NG

  // CODIGO ///////////////////////////////////////////////////////////////////
  find_player() {
    if (this.form_search.valid) {

      this.serv.PlayerByIdGET(this.form_search.value.search).subscribe(
        (data: any) => {
          this.player = data;
          this.datos.datasets=[]

          function numberRandom() {
            const minCeiled = Math.ceil(0);
            const maxFloored = Math.floor(256);
            return Math.floor(
              Math.random() * (maxFloored - minCeiled + 1) + minCeiled
            ); // The maximum is inclusive and the minimum is inclusive
          }

          for (let i = 0; i < data.length; i++) {
            let colors = numberRandom() + ', ' + numberRandom() + ', ' + numberRandom();

            this.datos.datasets.push({
              label: 'Version 20' + data[i].fifa_version,
              data: [
                data[i].pace,
                data[i].shooting,
                data[i].passing,
                data[i].dribbling,
                data[i].physic,
                data[i].mentality_penalties,
                data[i].potential,
              ],
              fill: true,
              backgroundColor: 'rgba(' + colors + ', 0.2)',
              borderColor: 'rgb(' + colors + ')',
              pointBackgroundColor: 'rgb(' + colors + ')',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(' + colors + ')',
            }); // termina arreglo
          } // termina for
          this.config;
          this.chart = new Chart('estadis_chart', this.config);
        },
        (error) => {
          // console.log(error);
        }
      );
    } else {
      this.form_search.markAllAsTouched();
    }
  } //

  // FORM ====================
  get searchGET() {
    return this.form_search.controls.search;
  }


  toUpdate(s:string){
    this.router.navigate(["update_player/"+s])

  }

} ///////////////////////////////////////////////////////////////////////////////
