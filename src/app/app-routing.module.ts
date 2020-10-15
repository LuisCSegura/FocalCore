import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [
  { path: '', component: SalesComponent },
  { path: 'clients', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
