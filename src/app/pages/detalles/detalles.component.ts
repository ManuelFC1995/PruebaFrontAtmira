import { ThrowStmt } from '@angular/compiler';
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
  explanation:undefined
};
photo:string="/assets/IMG/loading-Photo.gif";
  constructor(private apiS:ApiServiceService,private DateS:DateService) {
    this.Date= this.DateS.getDate();
    this.apiS.getData(this.Date).subscribe(data=>{
      this.entity=data;
      this.photo=this.entity.url;
      console.log(  this.entity)
      
    })
   }

  ngOnInit(): void {

   
 
  }
 
}
