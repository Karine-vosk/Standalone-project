import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IList} from 'src/app/core/interfaces/IList';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  // input required import from angular 16, also initial value is required
  @Input({required: true}) todo: IList = {
    isCompleted: false
  };
  @Input({required: true}) primitiveValue: string = '';

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }

  changeText(): void {
    this.todo.name = 'Text changed from inside';
  }
}
