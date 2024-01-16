// categories.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Category {
  name: string;
  newState: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesSubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  categories$: Observable<Category[]> = this.categoriesSubject.asObservable();

  constructor() {
    // Initialize the categories with some default values if needed
    const defaultCategories: Category[] = [
      { name: 'Groceries', newState: false },
      { name: 'Transportation', newState: false },
      { name: 'Entertainment', newState: false },
      { name: 'Dining Out', newState: false },
      { name: 'Unassigned', newState: false }
    ];
    this.categoriesSubject.next(defaultCategories);
  }

  getCategories() {
    return this.categoriesSubject.asObservable(); // Return an Observable
  }

  addCateg(categ: Category) {
    const currentCategories = this.categoriesSubject.value;
    currentCategories.push(categ);
    this.categoriesSubject.next(currentCategories);
  }

  deleteCat(index: number) {
    const currentCategories = this.categoriesSubject.value;
    currentCategories.splice(index, 1);
    this.categoriesSubject.next(currentCategories);
  }
}
