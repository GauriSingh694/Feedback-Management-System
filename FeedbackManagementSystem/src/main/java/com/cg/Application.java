package com.cg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Main Entry Point For Spring Boot Application
//This notation tells the Spring Boot Loader to run and configure the application
//as a Spring Boot Application
@SpringBootApplication
public class Application {

	// Main Entry Point Into Any Java Application
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
