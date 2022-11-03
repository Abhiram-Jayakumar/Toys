import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToyserviceService } from '../toyservice.service';

@Component({
  selector: 'app-adminviewpro',
  templateUrl: './adminviewpro.component.html',
  styleUrls: ['./adminviewpro.component.css']
})
export class AdminviewproComponent implements OnInit {

  productid: any
  productdata:any
  constructor(private activatedroute: ActivatedRoute, private Toyserviceservice: ToyserviceService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data: any) => {
      this.productid = data['id']
    })
    this.Toyserviceservice.viewproduct(this.productid).subscribe((item: any) => {
      this.productdata = item
    })
  }
}
