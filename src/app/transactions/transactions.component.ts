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
  
  value: string;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.value = '';
  }

  ngOnChanges()	{
    this.dataSource = new MatTableDataSource(TransactionalData.data.concat(this.receiveTransfer));
  }


  displayedColumns: string[] = ['categoryCode', 'transactionDate', 'merchant', 'amount',];
  dataSource = new MatTableDataSource(TransactionalData.data);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getDate(date: Date) {
    return new Date(date).toDateString();
  }

}