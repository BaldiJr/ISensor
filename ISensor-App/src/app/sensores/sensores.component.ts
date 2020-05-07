import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit {

  sensores: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSensores();
  }

  getSensores() {
    this.http.get('http://localhost:5000/api/Sensor').subscribe(response =>
      {this.sensores = response;
      }, error => {
        console.log(error);
      });
  }

}
