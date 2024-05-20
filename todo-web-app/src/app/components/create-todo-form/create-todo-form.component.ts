import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo } from '../../models/todo.model';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {
  formBuilder = inject(NonNullableFormBuilder);
  form = this.formBuilder.group({
    title: this.formBuilder.control<string>('', Validators.required),
    category: this.formBuilder.control<string>('', Validators.required),
    description: this.formBuilder.control<string>(''),
  });

  @Output() newTodoSubmitted = new EventEmitter<CreateTodo>()

  submitForm(): void {
    const newTodo: CreateTodo = {
      title: this.form.controls.title.value,
      category: this.form.controls.category.value,
      description: this.form.controls.description.value,
    }

    this.newTodoSubmitted.emit(newTodo);
  }
}
