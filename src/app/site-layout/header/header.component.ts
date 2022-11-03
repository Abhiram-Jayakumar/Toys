import { Component, OnInit } from '@angular/core';
import { ToyserviceService } from 'src/app/toys/toyservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchterm:any
  constructor( private toyserviceservice:ToyserviceService) { }

  ngOnInit(): void {
  }
  search(event:any){
this.searchterm=event.target.value
this.toyserviceservice.search.next(this.searchterm)
  }

}
