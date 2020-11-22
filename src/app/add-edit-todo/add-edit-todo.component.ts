import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import TODOModel from '../models/Todo';

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.scss']
})
export class AddEditTodoComponent implements OnInit {
  todo$: Observable<TODOModel>;
  selectedId: number;
  hero;
  constructor( private route: ActivatedRoute, private todoService: TodoService, private router: Router ) { }

  ngOnInit(): void {
    console.log('ngOnInit::');
    const heroId = this.route.snapshot.paramMap.get('id');
    console.log('Initial Hero Id', heroId);
    this.route.queryParams.subscribe(params => {
      console.log('params queryParams::', params);
    });
    this.todo$ = this.route.paramMap.pipe(
      switchMap(params => {
        console.log('params paramMap!!', params);
        this.selectedId = Number(params.get('id'));
        console.log('this.selectedId', this.selectedId);
        return this.todoService.getTodo(this.selectedId);
      })
    );
  }

  goToHome(): void {
    this.router.navigate(['../../todos'], { relativeTo: this.route });
  }

}
