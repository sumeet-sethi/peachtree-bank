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
export class TransactionsComponent implements OnInit, OnChanges {
  @Input() receiveTransfer: TransactionSchema;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[];
  dataSource = new MatTableDataSource(TransactionalData.data);
  value: string;
  sortByDateUpDown: boolean;
  sortByBeneficiaryUpDown: boolean;
  sortByAmountUpDown: boolean;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.value = '';
    this.displayedColumns = ['categoryCode', 'transactionDate', 'merchant', 'amount'];
    this.sortByDateUpDown = false;
    this.sortByBeneficiaryUpDown = false;
    this.sortByAmountUpDown = false;
  }

  ngOnChanges() {
    if (this.receiveTransfer.transactionDate !== 0) {
      TransactionalData.data = TransactionalData.data.concat(this.receiveTransfer);
    }
    TransactionalData.data = TransactionalData.data.sort((a, b) => (a.transactionDate > b.transactionDate) ? -1 : 1);
    this.setDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getDate(date: Date) {
    return new Date(date).toDateString();
  }

  sortByDate() {
    if (this.sortByDateUpDown) {
      TransactionalData.data = TransactionalData.data.sort((a, b) => (a.transactionDate > b.transactionDate) ? -1 : 1);
      this.sortByDateUpDown = false;
    } else {
      TransactionalData.data = TransactionalData.data.sort((a, b) => (a.transactionDate > b.transactionDate) ? 1 : -1);
      this.sortByDateUpDown = true;
    }
    this.setDataSource();
  }

  sortByBeneficiary() {
    if (this.sortByBeneficiaryUpDown) {
      TransactionalData.data = TransactionalData.data.sort((a, b) => (a.merchant > b.merchant) ? -1 : 1);
      this.sortByBeneficiaryUpDown = false;
    } else {
      TransactionalData.data = TransactionalData.data.sort((a, b) => (a.merchant > b.merchant) ? 1 : -1);
      this.sortByBeneficiaryUpDown = true;
    }
    this.setDataSource();
  }

  sortByAmount() {
    if (this.sortByAmountUpDown) {
      TransactionalData.data = TransactionalData.data.sort((a, b) => (a.amount > b.amount) ? -1 : 1);
      this.sortByAmountUpDown = false;
    } else {
      TransactionalData.data = TransactionalData.data.sort((a, b) => (a.amount > b.amount) ? 1 : -1);
      this.sortByAmountUpDown = true;
    }
    this.setDataSource();
  }

  setDataSource() {
    this.dataSource = new MatTableDataSource(TransactionalData.data);
  }

}
