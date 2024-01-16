import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories.service';
import { Category } from '../category.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})


export class ExpenseFormComponent implements OnInit{
  expenseForm!: FormGroup;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoriesService,
    private expenseService: ExpenseService ){

  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data: Category[]) =>{ this.categories = data

    });
    this.expenseForm = new FormGroup({
    'expenseName': new FormControl(null, Validators.required),
    'amount': new FormControl(null, Validators.required),
    'expenseDate': new FormControl(null, Validators.required),
    'expenseCategory': new FormControl(null, Validators.required),
    'paymentType': new FormControl(null, Validators.required),
    'comments': new FormControl(null),
    })

    console.log(this.categories)
    
  }

onSubmit(){
     
  this.expenseService.addExpense(this.expenseForm.value);
  this.expenseForm.reset();
  console.log("on submit on component that works")


}

}

