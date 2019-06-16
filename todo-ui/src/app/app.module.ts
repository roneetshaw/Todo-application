import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout'
import {MatDividerModule, MatDivider, MatIconModule, MatCheckboxModule, MatButtonModule, MatLabel, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatListModule,MatToolbarModule,MatSidenavModule} from '@angular/material'
import { ToDoItemComponent } from './toDoItem/toDoItem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoListComponent } from './toDoList/toDoList.componet';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoService } from 'src/lib/todo/todo.service';



@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

