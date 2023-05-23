import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {IList} from '../core/interfaces/IList';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export default class TodoListComponent {
  todoList: IList[] = [
    {
      id: 1,
      name: "first-todo item",
      isCompleted: true
    },
    {
      id: 2,
      name: "second-todo item",
      isCompleted: true
    },
    {
      id: 3,
      name: "third-todo item",
      isCompleted: false
    }
  ];
  primitiveValue: string = 'Primitive Value';
}
