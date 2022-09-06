import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shoe} from "../shoe";

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.scss']
})
export class DataTabComponent implements OnInit, OnChanges {

  shoes;

  @Input() categories = [
    {name: "All", value: 0, active: true, link:'#All'},
    {name: "Sport", value: 1, active: false, link:'#Sport'},
    {name: "Party", value: 2, active: false, link:'#Party'},
    {name: "Comf", value: 3, active: false, link:'#Comf'}
  ]

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(`https://localhost:5001/Shoe`).subscribe(
      res => {
        this.shoes = res
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.http.get(`https://localhost:5001/Shoe/${this.selectedCategory}`).subscribe(
    //   res => {
    //     this.filteredShoes = res
    //   }
    // )
  }
}
