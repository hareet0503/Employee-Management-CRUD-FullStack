package com.springboot2.Employee.management.repository;

import com.springboot2.Employee.management.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //all crud database methods



}
