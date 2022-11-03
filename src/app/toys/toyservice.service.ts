import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToyserviceService {
  search: any;

  constructor(private httpclient:HttpClient) { }
  viewAllProduct(){
    const baseurl='http://localhost:3000/products'
    return this.httpclient.get(baseurl)
  }
  viewproduct(productid:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.httpclient.get(baseurl)
  }
  editproduct(productid:any,productData:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.httpclient.put(baseurl,productData)
}
deleteproduct(productid:any){
  const baseurl=' http://localhost:3000/products/'+productid
  return this.httpclient.delete(baseurl)

}
addproduct(productdata:any){
  const baseurl='http://localhost:3000/products'
  return this.httpclient.post(baseurl,productdata)
}
}
