import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Entity } from 'src/app/Model/Entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'PruebaFront';
  private entitys:Entity[]=[];
  constructor(private api: ApiServiceService) { }

  async ngOnInit() {
   
  this.entitys=  this.api.getAllData();
  console.log(this.entitys);
   
  
}
}
