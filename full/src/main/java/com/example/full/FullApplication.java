package com.example.full;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;
import java.util.stream.Stream;

@SpringBootApplication
public class FullApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullApplication.class, args);
	}

	@Bean
	ApplicationRunner init(PersonRepo personRepo){
		ApplicationRunner applicationRunner = args -> {
			Stream.of("Aditya", "ritu").forEach(name -> {
				Person person = new Person();
				person.setName(name);
				personRepo.save(person);
			});
//			personRepo.findAll();
		};
		return applicationRunner;
	}
@Bean
public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	CorsConfiguration config = new CorsConfiguration();
	config.setAllowCredentials(true);
	config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
	config.setAllowedMethods(Collections.singletonList("*"));
	config.setAllowedHeaders(Collections.singletonList("*"));
	source.registerCorsConfiguration("/**", config);
	FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
	bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
	return bean;
}

}
