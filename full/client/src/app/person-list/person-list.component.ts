import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  person: Array<any>;

  constructor(private personService:PersonService) { }

  ngOnInit(){
    this.personService.getAll().subscribe(data => {
      this.person=data;
      console.log(this.person)
    })
  }

}
