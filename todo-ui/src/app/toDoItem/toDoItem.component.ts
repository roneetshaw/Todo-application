import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms'
import { Todo } from 'src/lib/todo/todo';
import { TodoService } from 'src/lib/todo/todo.service';

@Component({
    selector: 'toDo-item',
    templateUrl: './toDoitem.component.html',
    styleUrls: ['./toDoitem.component.css']
})
export class ToDoItemComponent implements OnChanges {
    minDate = new Date()
    toDoItemForm: FormGroup;
    @Input() selectedTodo: Todo;
    @Output() addedTodo: EventEmitter<Todo> = new EventEmitter();
    @Output() deletedTodo: EventEmitter<string> = new EventEmitter();
    constructor(private fb: FormBuilder, private todoService: TodoService) {
        this.generateForm();
    }

    ngOnInit(): void {

        if (this.selectedTodo)
            this.toDoItemForm.setValue(this.selectedTodo);
    }

    ngOnChanges() {
        if (this.selectedTodo)
            this.toDoItemForm.setValue(this.selectedTodo)
    }
    generateForm() {

        this.toDoItemForm = this.fb.group({
            todoId: [''],
            todoTitle: ['', Validators.required],
            description: ['', Validators.required],
            eventTime: ['', Validators.required]
        })
    }


    addTodo(newTodo: Todo, formDirective: FormGroupDirective) {
        this.todoService.post(newTodo).subscribe(x => {
            this.addedTodo.emit(newTodo);
            this.toDoItemForm.reset()
            formDirective.resetForm()
        });
    }

    delete() {
        if (this.selectedTodo.todoId) {
            this.todoService.delete(this.selectedTodo.todoId).subscribe(x => {
                this.deletedTodo.emit(this.selectedTodo.todoId);
                this.selectedTodo = null;
            })

        }

        this.toDoItemForm.reset();
    }

}



