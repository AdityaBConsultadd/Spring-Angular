package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
    @CrossOrigin(origins = "http://localhost:4200")
public class PersonController {

    public PersonController(PersonRepo personRepo) {
        this.personRepo = personRepo;
    }

    private final PersonRepo personRepo;

    @GetMapping("/get")
    public List<Person> getPerson(){
        return (List<Person>) personRepo.findAll();
    }

    @PostMapping("/get")
    void postPerson(@RequestBody Person person){
        personRepo.save(person);
    }

}
