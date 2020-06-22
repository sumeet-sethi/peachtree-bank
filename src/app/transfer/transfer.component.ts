import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.sass']
})
export class TransferComponent implements OnInit {
  accountType: string;
  myAccount: string;
  merchant: string;
  amount: number;
  balance: number;
  preview: boolean;


  constructor(private _snackBar: MatSnackBar) {
    this.balance = 5824.76;
    this.accountType = 'Free Checking(4692) : $ ';
    this.myAccount = this.accountType + this.balance;
    this.merchant = '';
    this.amount = 0;
  }

  ngOnInit(): void {
    this.preview = false;
  }

  clear() {
    this.merchant = '';
    this.amount = 0;
  }

  submit() {
    this.preview = true;
  }

  transfer() {
    if ((this.balance - this.amount) > -500.00) {
      this.balance = this.balance - this.amount;
      //TODO: If there is time try fixing this assignment bug
      //this.balance = (Math.round(this.balance * 100) / 100).toFixed(2);
      this.myAccount = this.accountType + this.balance;
      this.clear();
      this.preview = false;
    } else {
      this._snackBar.open('Overdraft cannot go beyond $ -500', 'ERROR', {
        duration: 2000,
      });
      this.preview = false;
    }

  }

}
