import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { DateService } from 'src/app/date.service';
import { Entity } from 'src/app/Model/Entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'PruebaFront';
  public entitys:Entity[]=[];
  constructor(private api: ApiServiceService, private DateS:DateService,private router:Router) { }

  async ngOnInit() {
  
  this.entitys= this.api.getAllData();
  console.log(this.entitys);
   


}
public GotoDetalles(Date:string) {
  this.DateS.setDate(Date);
  
    }
  }
