import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'transfer', component: TransferComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/transfer', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
