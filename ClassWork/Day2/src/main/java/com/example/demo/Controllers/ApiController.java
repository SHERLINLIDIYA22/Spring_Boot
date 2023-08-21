package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
	
	@Value("${name}")
	private String Name;
	
	@GetMapping("/")
	public String getName() {
		return Name;
	}
}
