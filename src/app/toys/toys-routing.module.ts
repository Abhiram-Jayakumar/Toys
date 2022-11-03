import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmiaddproductComponent } from './admiaddproduct/admiaddproduct.component';
import { AdminComponent } from './admin/admin.component';
import { AdminviewallComponent } from './adminviewall/adminviewall.component';
import { AdminviewproComponent } from './adminviewpro/adminviewpro.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { ToysComponent } from './toys.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'view-pro/:id', component: ViewProductComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'adminviewpro/:id', component: AdminviewproComponent },
  { path: 'adminviewall', component: AdminviewallComponent },
  { path: 'adminadd', component: AdmiaddproductComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToysRoutingModule { }
