import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { PersonListComponent } from './person-list/person-list.component';


const routes: Routes = [
  {path: '', redirectTo: "/person-list", pathMatch: "full"},
  {
    path: "person-list",
    component: PersonListComponent
  },
  {
    path: "person-add",
    component: EditPersonComponent
  },
  {
    path: "person-edit/:id",
    component: EditPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
