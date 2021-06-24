import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { DateService } from 'src/app/date.service';
import { Entity } from 'src/app/Model/Entity';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
public  Date:string;
public entity:Entity= {
  id:undefined,
  date:'',
  url:undefined,
  title:undefined,
  Explanation:undefined
};
  constructor(private apiS:ApiServiceService,private DateS:DateService) { }

  ngOnInit(): void {
   this.Date= this.DateS.getDate();
 this.apiS.getData(this.Date).subscribe(data=>{
   this.entity=data;
   console.log(  this.entity)
   
 })
  }
  refresh(): void {
    window.location.reload();
    this.Date= this.DateS.getDate();
    this.apiS.getData(this.Date).subscribe(data=>{
      this.entity=data;
      console.log(  this.entity)
      
    })
}
}
