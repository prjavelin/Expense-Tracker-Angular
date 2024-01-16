import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { Category } from '../category.model';


@Component({
  selector: 'app-expense-categ',
  templateUrl: './expense-categ.component.html',
  styleUrl: './expense-categ.component.css'
})
export class ExpenseCategComponent implements OnInit{
  eCategories: Category[] = [];
  duplicate: boolean = false;
  categ: string = '';


  constructor(private categoryService: CategoriesService ){

  }

ngOnInit(){
  this.categoryService.getCategories().subscribe(categories => {
    this.eCategories = categories;
  });
  console.log(this.eCategories)

}

addCategory(){
  if(this.categ.trim() !== ''){
    const category: Category = {name: this.categ, newState: true};

  const isDuplicate = this.eCategories.some(cat => cat.name.toLowerCase() === category.name.toLowerCase());

    if (!isDuplicate) {
      this.categoryService.addCateg(category);
   // this.categoryService.addCateg(category);
    this.categ ='';
    console.log(this.eCategories)
    }if(isDuplicate){
      this.duplicate = true;
      setTimeout(() => {
        this.duplicate = false;
      }, 3000);
    }

  
  }
}
  


  deleteCat(index: number){
   this.categoryService.deleteCat(index);
   
} 

}

