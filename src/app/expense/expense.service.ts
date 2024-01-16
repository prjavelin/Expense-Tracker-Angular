import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  addExpense(expense: FormGroup){
    console.log('on submit on the service')
  }

}
