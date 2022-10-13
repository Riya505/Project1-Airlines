import { Component, OnInit } from '@angular/core';
import { Api2Service } from '../api2.service';

@Component({
  selector: 'app-view-all-passengers',
  templateUrl: './view-all-passengers.component.html',
  styleUrls: ['./view-all-passengers.component.css']
})
export class ViewAllPassengersComponent implements OnInit {

  constructor(private myapi:Api2Service) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewPassengers().subscribe(
      (data)=>{
        this.passengersData=data
      }
    )
   }

  passengersData:any={}

  ngOnInit(): void {
  }

}
