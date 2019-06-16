import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { map } from 'rxjs/operators'
import { Todo } from 'src/lib/todo/todo';
import { TodoService } from 'src/lib/todo/todo.service';

@Component({
    selector: 'toDo-List',
    templateUrl: './toDoList.component.html',
    styleUrls: ['./toDoList.component.css']
})
export class ToDoListComponent {

    @Input() todoList: Todo[];
    @Output() createTodoEmitter: EventEmitter<string> = new EventEmitter();
    @Output() selectedTodo: EventEmitter<Todo> = new EventEmitter();
    deleteArray: string[] = []

    constructor(private todoService: TodoService) {

    }
    addDeleteArray(id) {
        if (this.deleteArray.find(x => x == id)) {
            this.deleteArray = this.deleteArray.filter(x => x != id)
        }
        else {
            this.deleteArray.push(id);
        }
    }


    deleteTodos() {
        this.deleteArray.forEach(element => {
            this.todoService.delete(element).subscribe(x => {
                this.todoList = this.todoList.filter(x => x.todoId != element)
            })
        });
    }

    selectTodo(todo) {
        this.selectedTodo.emit(todo)
    }
    createToDo() {
        this.createTodoEmitter.emit("clear");
    }

}