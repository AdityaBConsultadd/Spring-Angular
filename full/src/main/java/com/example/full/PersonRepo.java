package com.example.full;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
//@CrossOrigin(origins = "http://localhost:4200/")
public interface PersonRepo extends JpaRepository<Person, Long> {
}
