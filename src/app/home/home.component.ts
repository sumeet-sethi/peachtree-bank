import { Component, OnInit } from '@angular/core';
import { TransactionSchema } from '../interfaces/transaction-schema';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  receiveTransferTransaction: TransactionSchema;

  constructor() { }

  ngOnInit(): void {
    this.receiveTransferTransaction = {
      amount: 0,
      categoryCode: '',
      merchant: '',
      merchantLogo: '',
      transactionDate: 0,
      transactionType: ''
    };
  }

  sendTransferTransaction(sendTransferTransactionObject: TransactionSchema) {
    this.receiveTransferTransaction = sendTransferTransactionObject;
  }


}
