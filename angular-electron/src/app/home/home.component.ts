import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  categories: Array<String>;
  currentIndex: number;
  loadedEntries: Array<String>;
  currentEntry: String;

  getCategories() {
    this.categories = [
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4',
    ]
  }

  loadEntries(page: Number){
    this.loadedEntries = [
      'Entry 1',
      'Entry 2',
      'Entry 3',
      'Entry 4',
    ]
  }

  getNextEntry(){
    if(this.currentIndex > this.loadedEntries.length-1){
      this.loadEntries(0);
      this.currentIndex = 0;
    }
    this.currentIndex += 1;

    this.currentEntry = this.loadedEntries[this.currentIndex - 1];

  };

  select(cat: string){
    if(cat !== "Click Any category to Start"){
      //submit api request
    }
    console.log(`${this.currentEntry} : ${cat}`);
    this.getNextEntry();
  }

  ngOnInit() {
    this.getCategories();
    this.loadEntries(0);
    this.currentIndex = 0;
    this.currentEntry = "Click Any category to Start";
  }

}
