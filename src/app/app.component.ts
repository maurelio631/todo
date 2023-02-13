import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas tarefas';
  constructor() {
    this.todos.push(new Todo(1,'Estudar pelo menos 2h por dia todo dia da semana',false) );
    this.todos.push(new Todo(2,'Ir para a academia pelo menos 4x na semana',false) );
    this.todos.push(new Todo(3,'Jogar pelo menos um pouco todo dia ',false) );
  }
}
