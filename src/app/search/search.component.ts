import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template:`
  <form [formGroup]="searchForm" (ngSubmit)="search()">
  <input type="text" placeholder="Username" formControlName="searchText">
  <button type="submit" [disabled]="searchForm.invalid">Wyszukaj</button>
  <form>
  `

})
export class SearchComponent {
  get searchText(){
    return this.searchForm.controls.searchText
  }
  searchForm = new FormGroup({
    searchText: new FormControl('', Validators.required)
  })
  search() {
    if(this.searchForm.valid) {
      console.log('Szukałeś ' + this.searchText.value)
    }
  }

}
