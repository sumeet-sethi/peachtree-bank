import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import TransactionalData from '../../mock/transactions.json';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['categoryCode', 'transactionDate', 'merchant', 'amount',];
  dataSource = new MatTableDataSource(TransactionalData.data);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getDate(date:Date) {
    return new Date(date).toDateString();
  }

}
