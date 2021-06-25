import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entity } from './Model/Entity';



import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  currentdate: Date;
  date: string;
  Month: string;
  day: string;
  FivedaysAgo: string[] = [];


  constructor(private http: HttpClient) {
    //configura la fecha actual
    this.currentdate = new Date();

    if (this.currentdate.getUTCMonth() < 10) {
      this.Month = "0" + this.currentdate.getUTCMonth().toString();
    } else {
      this.Month = this.currentdate.getUTCMonth().toString();
    }

    if (this.currentdate.getDate() < 11) {
      let day:number =this.currentdate.getDate()-1;
      this.day = "0" + day.toString();
    } else {
      let day:number =this.currentdate.getDate()-1;
      this.day = day.toString();
    }
    this.date = (this.currentdate.getFullYear() + "-" + this.Month + "-" + this.day);
    console.log(this.date);

    this.get6Days();
    console.log(this.FivedaysAgo);
  }


  /** GET de  una entidad en un dia indicado */
  public getData(Date: string): Observable<Entity | null> {
    let header = new HttpHeaders().set('Type-content', 'application/json')
    let endpoint = environment.endpoint + Date
    return this.http.get<Entity>(endpoint)
  }



  public getAllData(): Entity[] | null {
  let values :Entity[]=[];
  this.FivedaysAgo.forEach(element => {
    let aux:Entity=null;
    console.log(element )
    this.getData(element).subscribe(resp=>{
      console.log(resp )
      aux=resp;
      waitForAsync;
      values.push(aux);
    
    })
  });
  return values
  }


  /** Método que obtiene un array de string con la fecha de actual y los 5 dias previos */
  public get6Days() {
    let dayAux = this.currentdate.getDate()-1;
    let monthAux = this.currentdate.getUTCMonth();
    let YearAux = this.currentdate.getFullYear();
    let aux1 = "-";
    let aux2 = "-";
    this.FivedaysAgo.push(this.date);
    for (var counter: number = 1; counter < 6; counter++) {
      if (dayAux > 1) {
        dayAux--;

        if (monthAux < 10) {
          aux1 = "-0";
        } else {
          aux1 = "-";
        }

        if (dayAux < 10) {
          aux2 = "-0";
        } else {
          aux2 = "-";
        }
        let dateAgo = (YearAux + aux1 + monthAux + aux2 + dayAux);
        this.FivedaysAgo.push(dateAgo);
      }
      if (monthAux < 2 && dayAux < 2) {
        dayAux = 31;
        monthAux = 12;
        YearAux--;
        let dateAgo = (YearAux + aux1 + monthAux + aux2 + dayAux);
        this.FivedaysAgo.push(dateAgo);
      }
      if (dayAux < 2) {
        monthAux--;
        if (monthAux = 1, 3, 5, 7, 8, 10, 12) {
          dayAux = 31;
        }
        if (monthAux = 4, 6, 9, 11) {
          dayAux = 30;
        }
        if (monthAux = 2) {
          dayAux = 28;
        }
        let dateAgo = (YearAux + aux1 + monthAux + aux2 + dayAux);
        this.FivedaysAgo.push(dateAgo);
      }
      else {
        console.log("fallo cargando los dias")
      }

    }
    this.FivedaysAgo.reverse();
  }
}
