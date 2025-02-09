import { NgModule } from '@angular/core';
import { ActivityComponent } from './activity.component';
import { Table, TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    ActivityComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    FormsModule


  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports:[
  ]
})
export class ActivityModule { }
