import { Component } from '@angular/core';
import { Todo, TodoDetailsService } from '../pages/todo-details/todo-details.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todos: Todo[];

  constructor(private todoService: TodoDetailsService) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    })
  }

  remove(item){
    this.todoService.removeTodo(item.id)
  }

}
