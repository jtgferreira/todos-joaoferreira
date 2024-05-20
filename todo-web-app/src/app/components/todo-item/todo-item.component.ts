import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NzCardModule, NzTagModule, NzButtonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input({required: true}) data!: Todo;
  
  @Output() markAsDone = new EventEmitter<number>();

  done(): void {
    this.markAsDone.emit(this.data.id);
  }
}
