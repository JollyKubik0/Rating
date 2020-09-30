package edu.ratingsdj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages="edu.ratingsdj")
public class RatingSdjApplication {

	public static void main(String[] args) {
		SpringApplication.run(RatingSdjApplication.class, args);
	}

}