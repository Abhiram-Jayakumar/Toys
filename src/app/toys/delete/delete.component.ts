import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToyserviceService } from '../toyservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  productid:any

  constructor(private activatedroute:ActivatedRoute,private toyserviceservice:ToyserviceService,private router:Router) { }

  ngOnInit(): void {
   this.activatedroute.params.subscribe((data:any)=>
   {
    this.productid=data['id']
   })
   this.toyserviceservice.deleteproduct(this.productid).subscribe((item:any)=>
   {
    alert('product deleted')
    this.router.navigateByUrl('Toys/adminviewall')
})
}
}
