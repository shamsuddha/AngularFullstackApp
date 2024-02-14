import { Component } from "@angular/core";

@Component({
  selector: 'SearchComp',
  templateUrl:'./SearchComp.html',
  styleUrls: ['./SearchComp.scss']
})
export class SearchComp{

  searchText: string = "mens wear";

  updateSearchText(event: any)
  {
    this.searchText = event.target.value;
    console.log(event.target.value);
  }

  
}