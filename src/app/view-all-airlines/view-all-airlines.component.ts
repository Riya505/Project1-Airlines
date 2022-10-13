import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-airlines',
  templateUrl: './view-all-airlines.component.html',
  styleUrls: ['./view-all-airlines.component.css']
})
export class ViewAllAirlinesComponent implements OnInit {

  constructor() { }

  irlineData=[]

  ngOnInit(): void {
  }

}
