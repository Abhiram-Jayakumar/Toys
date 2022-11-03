import { Component, OnInit } from '@angular/core';
import { ToyserviceService } from '../toyservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  center: any;
  filtercategory: any;
  searchkey: any = ''
  products:any
  constructor(private toyservice:ToyserviceService) { }

  ngOnInit(): void {

    this.toyservice.viewAllProduct().subscribe(data=>{
      this.products=data
    })

    this.toyservice.search.subscribe((value:any)=>{
      this.searchkey=value
    })
  }
  filter(category: any) {
    this.filtercategory = this.products.filter((item: any) => {
      if (item.categoryId == category || category == '') {
        return item
      }
    })
  }

}
