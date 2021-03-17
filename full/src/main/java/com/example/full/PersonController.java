package com.example.full;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping
public class PersonController {
    @Autowired
    PersonRepo personRepo;

    @GetMapping()
//    @CrossOrigin(origins = "http://localhost:4200/")
    Collection<Person> listPerson(){
        return personRepo.findAll();
    }
}
