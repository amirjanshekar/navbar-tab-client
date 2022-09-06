import {Component, OnInit} from '@angular/core';
import {Shoe} from "./shoe";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  categories = [
    {name: "All", value: 0, active: true, link:'#All'},
    {name: "Sport", value: 1, active: false, link:'#Sport'},
    {name: "Party", value: 2, active: false, link:'#Party'},
    {name: "Comf", value: 3, active: false, link:'#Comf'}
  ]

  constructor() {}


  ngOnInit(): void {

  }
}
