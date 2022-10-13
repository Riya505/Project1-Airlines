import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-passengers',
  templateUrl: './view-all-passengers.component.html',
  styleUrls: ['./view-all-passengers.component.css']
})
export class ViewAllPassengersComponent implements OnInit {

  constructor() { }

  passengersData={}

  ngOnInit(): void {
  }

}
