import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component'
import { BooksComponent } from '../components/books/books.component'
import { AuthorsComponent } from '../components/authors/authors.component'
import { TeacherComponent } from '../components/teacher/teacher.component'


    const routes: Routes = [
      {
        path: 'authors',
        component: AuthorsComponent,
      },
      {
        path: 'books',
        component: BooksComponent,
      },
      {
        path: 'teacher',
        component: TeacherComponent,
      },
      {
          path: '',
          component: DashboardComponent,
      },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }