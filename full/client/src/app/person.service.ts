import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { resourceUsage } from 'process';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public API="//localhost:8080/";
  public PERSON_API= this.API+"persons";

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get(this.API);
  }
  get(id:string){
    return this.http.get(this.PERSON_API+'/'+id);
    // return this.http.get(this.API+'/'+id);
  }
  save(person:any){
    let result: Observable<any>;
    if(person){
      result=this.http.put(person.href,person);
      console.log(person)
      console.log(result)
    }else{
      console.log(result)
      console.log(person)
      result=this.http.put(this.PERSON_API,person);
      // result=this.http.put(this.API,person);
    }
    return result;
  }
  remove(href: string){
    return this.http.delete(href);
  }

}
