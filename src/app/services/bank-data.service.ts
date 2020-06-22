import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankDataService {

  constructor(private httpService: HttpClient) { }

  getAllTransactions() {
    return this.httpService.get('../../mock/transactions.json');
  }

}
