import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClientModule}from'@angular/common/http';
import { ToysRoutingModule } from './toys-routing.module';
import { ToysComponent } from './toys.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminviewproComponent } from './adminviewpro/adminviewpro.component';
import { AdminviewallComponent } from './adminviewall/adminviewall.component';
import { AdmiaddproductComponent } from './admiaddproduct/admiaddproduct.component';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    ToysComponent,
    IndexComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ViewProductComponent,
    AdminComponent,
    DeleteComponent,
    EditComponent,
    AdminviewproComponent,
    AdminviewallComponent,
    AdmiaddproductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ToysRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ToysModule { }
