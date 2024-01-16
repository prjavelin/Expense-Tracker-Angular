import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpenseComponent } from './expense/expense.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ExpenseCategComponent } from './expense/expense-categ/expense-categ.component';
import { ExpenseFormComponent } from './expense/expense-form/expense-form.component';
import { ImportDocsComponent } from './import-docs/import-docs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExpenseComponent,
    UserInfoComponent,
    ExpenseCategComponent,
    ExpenseFormComponent,
    ImportDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
