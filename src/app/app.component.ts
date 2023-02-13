import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: any[] = [];
  public title: string = 'Minhas tarefas';
  constructor() {
    this.todos.push('Estudar pelo menos 2h por dia todo dia da semana');
    this.todos.push('Ir para a academia pelo menos 4x na semana');
    this.todos.push('Jogar um pouco pelo menos por dia');
  }
}
