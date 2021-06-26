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

public entity:Entity= {
  id:undefined,
  date:'',
  url:undefined,
  title:undefined,
  explanation:undefined
};

photo:string="/assets/IMG/loading-Photo.gif";
  constructor(private apiS:ApiServiceService,private DateS:DateService) {
      this.entity= this.DateS.getEntity();
      this.photo=this.entity.url;
   }


  ngOnInit(): void {

  }

}
