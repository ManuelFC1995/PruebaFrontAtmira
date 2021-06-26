import { Injectable } from '@angular/core';
import { Entity } from './Model/Entity';

@Injectable({
  providedIn: 'root'
})
export class DateService {
private Date:string ;
private entity:Entity;
  constructor() { }

  public getDate():string{
    return this.Date;
  }

  public setDate(Date:string){
    this.Date=Date;
  }

  public getEntity():Entity{
    return this.entity;
  }

  public setEntity(entity:Entity){
    this.entity=entity;
  }

}
