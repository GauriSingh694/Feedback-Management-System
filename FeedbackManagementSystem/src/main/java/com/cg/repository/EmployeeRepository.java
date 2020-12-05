// This package is created to hold JPA Repositories
// Interface because our JPA repositories are interfaces
package com.cg.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.model.Employee;
import com.cg.model.Role;

// We are going to use Employee as our data type and Integer refers to primary key
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	
	Employee findByEmployeeIdAndPasswordAndRole(Integer employeeId,String passWord,Role role);
	
	// Custom Queries other than CRUD Operations
	@Query("select e from Employee e where e.role = 1")
	List<Employee> getAllTrainers();

}
// We now have Find, Update, Save, Delete and a bunch of other operations already 
// set up and usable for us on our Employee JPA class