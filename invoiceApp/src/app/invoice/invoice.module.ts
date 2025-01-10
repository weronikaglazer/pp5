import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientListElementComponent } from './components/client-list-element/client-list-element.component';

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientListComponent,
    ClientListElementComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule 
  ],
  exports: []
})
export class InvoiceModule { }
