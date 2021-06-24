import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
private Date:string ;
  constructor() { }

  public getDate():string{
    return this.Date;
  }

  public setDate(Date:string){
    this.Date=Date;
  }
}
