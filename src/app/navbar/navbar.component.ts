import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() {
  }

  @Input() categories = [
    {name: "All", value: 0, active: true, link:'#All'},
    {name: "Sport", value: 1, active: false, link:'#Sport'},
    {name: "Party", value: 2, active: false, link:'#Party'},
    {name: "Comf", value: 3, active: false, link:'#Comf'}
  ]
  @Output() categoriesChange = new EventEmitter<any>();


  setCategory(category) {
    this.categories.map(item => {
        if (item.active) {
          item.active = false
        }
        if (item.value === category.value) {
          item.active = true
        }
      }
    )
    this.categories[this.categories.indexOf(category)].active = true;
    this.categoriesChange.emit(this.categories);
  }

}
