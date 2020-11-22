import { Component, OnInit } from '@angular/core';
import TodoModel from '../models/Todo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('COnstrutor of todoListComponent');
  }

  gotoItems(): void{
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['create-edit-todo', { id: 1 , name: 'test'}],  { relativeTo: this.route });
  }
}
