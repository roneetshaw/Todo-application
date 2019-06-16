import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/lib/todo/todo.service';
import { Todo } from 'src/lib/todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AbhishekOnboardingEx3';

  constructor(private todoService:TodoService){
    
  }

  todoList:Todo[]
selectedTodo:Todo;
  ngOnInit(){
this.getTodo();
  }
  cleanCurrentItem(state){
    if(state=="clear"){
this.selectedTodo={
  todoId:"",
  description:'',
  eventTime:"",
  todoTitle:""
}
    }
    else{
      this.getTodo()
    }
}
 

  addTodo(todo){
    this.getTodo();
  }
  selectedTodoChange(todo){
    this.selectedTodo=todo;
  }
  removeTodo(todoId){
    this.todoList=this.todoList.filter(x=>x.todoId!=todoId);
  }

  getTodo(){
    this.todoService.get().subscribe(x=>
      this.todoList=x)
  }
}
 