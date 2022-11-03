import { Component, OnInit } from '@angular/core';
import { ToyserviceService } from '../toyservice.service';

@Component({
  selector: 'app-adminviewall',
  templateUrl: './adminviewall.component.html',
  styleUrls: ['./adminviewall.component.css']
})
export class AdminviewallComponent implements OnInit {

  products:any
  constructor(private toyservice:ToyserviceService) { }

  ngOnInit(): void {

    this.toyservice.viewAllProduct().subscribe(data=>{
      this.products=data
    })

  }
}
