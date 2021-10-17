package com.springboot2.Employee.management;

import com.springboot2.Employee.management.model.Employee;
import com.springboot2.Employee.management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
	//	Employee employee = new Employee();
	//	employee.setFirstName("Hareet");
	//	employee.setLastName("Yadav");
	//	employee.setEmailid("hareeydv95@gmail.com");
	//	employeeRepository.save(employee);

	//	Employee employee1 = new Employee();
	//	employee1.setFirstName("Jaideep");
	//	employee1.setLastName("Yadav");
	//	employee1.setEmailid("jdpydv97@gmail.com");
	//	employeeRepository.save(employee1);

	}
}
