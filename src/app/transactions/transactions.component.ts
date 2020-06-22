import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import TransactionalData from '../../mock/transactions.json';
import { TransactionSchema } from '../interfaces/transaction-schema';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  @Input() receiveTransfer: TransactionSchema;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[];
  dataSource = new MatTableDataSource(TransactionalData.data);
  value: string;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.value = '';
    this.displayedColumns = ['categoryCode', 'transactionDate', 'merchant', 'amount',];
  }

  ngOnChanges() {
    if (this.receiveTransfer.transactionDate !== 0) {
      TransactionalData.data = TransactionalData.data.concat(this.receiveTransfer)
    }
    TransactionalData.data = TransactionalData.data.sort((a, b) => (a.transactionDate > b.transactionDate) ? -1 : 1)
    this.dataSource = new MatTableDataSource(TransactionalData.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getDate(date: Date) {
    return new Date(date).toDateString();
  }

}
