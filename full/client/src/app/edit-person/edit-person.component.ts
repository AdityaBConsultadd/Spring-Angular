import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonService } from '../person.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit  {

  person:any={};
  
  sub:Subscription;

  constructor(private route:ActivatedRoute, private router: Router, private personService : PersonService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      // console.log(params);
      const id = params.id;
      if(id==undefined)
        
      // console.log(params.name);
      // console.log(params.id,params.name)
      if(id){
        this.personService.get(id).subscribe((person:any)=>{
          this.person=person;
          this.person.href = person._link.self.href;
        });
      }else{
        console.log(`Person with id '${id}' not found`);
        this.goto();
      }
    });
  }

  ngOnDestory(){
    this.sub.unsubscribe();
  }

  goto(){
    this.router.navigate(['/person-list'])
  }

  save(form : NgForm){
    this.personService.save(form).subscribe(result=>{
      this.goto();
    }), error => console.error(error);
    
  }
  remove(href){
    this.personService.remove(href).subscribe(result=>{
      this.goto();
    }), error => console.error(error);
    
  }


}
