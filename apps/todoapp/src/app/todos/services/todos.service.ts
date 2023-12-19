import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoRequest, TodoResponse } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/todoapp/src/environments/environment';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {
    this.getTodos();
  }
  todos$ = new BehaviorSubject<TodoResponse[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);
  getTodos(): void {
    this.http
      .get(`${environment.apiUrl}/task`, {
        withCredentials: true,
      })
      .subscribe(
        (todos) => {
          this.todos$.next(todos as TodoResponse[]);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
  addTodo(text: string): void {
    const newTodo: TodoRequest = {
      text,
      isCompleted: false,
    };

    this.http
      .post(`${environment.apiUrl}/task`, newTodo, {
        withCredentials: true,
      })
      .subscribe(
        (newTodo) => {
          console.log('Task created!');
          const updatedTodos = [
            ...this.todos$.getValue(),
            newTodo as TodoResponse,
          ];
          this.todos$.next(updatedTodos);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  toggleAll(isCompleted: boolean): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      return {
        ...todo,
        isCompleted,
      };
    });
    this.http
      .put(`${environment.apiUrl}/task/toggleAll`, updatedTodos, {
        withCredentials: true,
      })
      .subscribe(
        (response) => {
          console.log('Tasks complete status updated');
          this.todos$.next(updatedTodos);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  changeFilter(filterName: FilterEnum): void {
    this.filter$.next(filterName);
  }

  changeTodo(id: string, text: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.uuid === id) {
        const updatedTodo = { ...todo, text };
        this.http
          .put(`${environment.apiUrl}/task/${id}`, updatedTodo, {
            withCredentials: true,
          })
          .subscribe(
            (response) => {
              console.log('Task text updated');
            },
            (error) => {
              console.error('Error:', error);
            }
          );
        return updatedTodo;
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
  }

  removeTodo(id: string): void {
    this.http
      .delete(`${environment.apiUrl}/task/${id}`, {
        withCredentials: true,
      })
      .subscribe(
        (response) => {
          console.log('Task deleted');
          const updatedTodos = this.todos$
            .getValue()
            .filter((todo) => todo.uuid !== id);
          this.todos$.next(updatedTodos);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  toggleTodo(id: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.uuid === id) {
        const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
        this.http
          .put(`${environment.apiUrl}/task/${id}`, updatedTodo, {
            withCredentials: true,
          })
          .subscribe(
            (response) => {
              console.log('Task complete status updated');
            },
            (error) => {
              console.error('Error:', error);
            }
          );
        return updatedTodo;
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
  }
}
