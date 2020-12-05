// This package is created to hold our API Controllers
// These controllers will handle our API endpoints, and they're going to be REST based.
// By default, REST controller will return 200s as response status for all the calls.

package com.cg.controller;

import java.util.HashSet;
//import java.util.HashMap;
//import java.util.HashMap;
import java.util.List;
//import java.util.Map;
import java.util.Map;
import java.util.Set;


//import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.ResponseStatus;
// import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Course;
import com.cg.model.Employee;
import com.cg.model.Skill;
import com.cg.service.EmployeeService;

/* 
 * Adding annotations so that Spring MVC knows that these are controllers.
 * @RestController means that this will respond to payloads incoming & outgoing as
 * JSON REST endpoints.
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController

/*
 * This tells the router what the mapping URL looks like. Here, specifying the
 * route path is "/employee". All request to that URL will be sent to this
 * controller.
 */
@RequestMapping("/api/v1/")
public class EmployeeController {

	/*
	 * Using Spring to inject or auto wire the employee repository. So, Spring will
	 * auto wire this when our EmployeeController is built. It will create an
	 * instance of the employee repository and put it onto our class.
	 */
	@Autowired
	private EmployeeService employeeService;

	// http://localhost:8080
	/*
	 * Creaing a list endpoint. This will return all of the employee when called, so
	 * we need to create a method as given below
	 */
	/*
	 * @GetMapping tells which HTTP verb to use, which will be a GET verb to call to
	 * this endpoint. findAll() method is going to go out and query all the
	 * employees in the database and return them as a list of Employee objects. Our
	 * data type is returning that list of employees, and Spring MVC will then pass
	 * that over to Jackson, which is a serilaization library, which will turn those
	 * employees into JSON and return them back to the caller.
	 */
	@GetMapping("/employees") // @GetMapping annotation maps to the HTTP GET method.
	public List<Employee> getAllEmployee() {
		return employeeService.viewAllEmployee();
	}

	@GetMapping("/employees/trainer") // @GetMapping annotation maps to the HTTP GET method.
	public List<Employee> getAllTrainer() {
		return employeeService.getAllTrainer();
	}

	/*
	 * Next REST endpoint we're adding is the ability to give a specific employee by
	 * ID.
	 * 
	 * @RequestMapping is in addition to the class RequestMapping. Our class
	 * RequestMapping is /api/employee, and the RequestMapping on this is adding an
	 * additional id to the URL. This id is specifying a specific employee, and we
	 * want to return that. The parameter on the GET is pulling that off of the URL
	 * and injecting into our method automatically. Again this handled by, Spring
	 * MVC. We can use the employee Repository, & again, it's auto built this method
	 * called getOne where we can pass the id, and it returns and queries the
	 * employee for that id back to the caller. Once we get it back, we just return
	 * that. &, in our controller we are auto marshalling the eemployee, which will
	 * return the specific session back to the caller in JSON payload.
	 */
	@GetMapping("/employees/{id}")
	// @RequestMapping("{id}")
	public Employee getEmployeeById(@PathVariable(value = "id") Integer employeeId) throws ResourceNotFoundException {
		return employeeService.viewEmployeeById(employeeId);
		// return employeeRepository.getOne(id);
	}

	/*
	 * Adding @PostMapping annotation to this endpoint, it's not going to infer
	 * anything from that. Because, typically when we create something or post
	 * something, we get a 201 back, but Spring REST controllers will just return a
	 * 200. So, one way we will be overriding those, by adding @ResponseStatus, we
	 * can specify the exact response that we want to occur when the method executes
	 * and finishes. In this case, we have given a HttpStatus of CREATED, which maps
	 * to 201 in the Http world.
	 */
	/*
	 * @PostMapping says that we are requiring the HTTP verb POST to be presented
	 * with the API call. We didn't give it a request mapping because, we are
	 * posting to the base part of the class,which is the /api/employee endpoint,
	 * using the POST verb. In the create parameter section, we've had
	 * an @RequestBody and we have a Employee object that's passed in. Here, Spring
	 * MVC is taking in all of the attributes in JSON payload and automatically
	 * marshalling them into a Employee object. When we are using JPA and entities,
	 * we can save objects as we're working with it but it actually doesn't get
	 * committed to the database until we flush it.
	 */  
	@PostMapping("/employees") // @PostMapping annotation maps to HTTP POST method.
	// @ResponseStatus(HttpStatus.CREATED)
	/*
	 * We begin by creating the create method, so thsi will create a new employee
	 * and if we pass an employee info to the API endpoint, it will craete a new
	 * employee into the database.
	 */
	public Employee createEmployee(/* @Valid */ @RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}

	/*
	 * @RequestMapping(value = "{id}", method = RequestMethod.PUT) public Session
	 * update(@PathVariable Long id, @RequestBody Session session) { //because this
	 * is a PUT, we expect all attributes to be passed in. A PATCH would only need
	 * what has changed. //TODO: Add validation that all attributes are passed in,
	 * otherwise return a 400 bad payload. Session existingSession =
	 * sessionRepository.getOne(id); BeanUtils.copyProperties(session,
	 * existingSession, "session_id"); return
	 * sessionRepository.saveAndFlush(existingSession);
	 */
	/*
	 * Changing method to HTTP verb PUT. In REST implementations, when we're
	 * updating a record, we have two verbs ,i.e, PUT and the PATCH that we can
	 * choose from. PUT: will replace all of the attributes on the record that we're
	 * updating. PATCH: will allow just a portion of the attributes to be updated.
	 */
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable(value = "id") Integer employeeId, @RequestBody Employee newEmployee)
			throws ResourceNotFoundException {
		return employeeService.updateEmployeeDetails(employeeId, newEmployee);
	}
	/*
	 * @PutMapping("/update-employees/{id}") public ResponseEntity<Employee>
	 * updateEmployee(@PathVariable(value = "id") Integer employeeId,
	 * 
	 * @RequestBody Employee employeeDetails) { Employee employee =
	 * employeeRepository.findById(employeeId).get();
	 * employee.setEmployeeId(employeeDetails.getEmployeeId());
	 * employee.setEmpName(employeeDetails.getEmpName());
	 * employee.setPassword(employeeDetails.getPassword());
	 * employee.setRole(employeeDetails.getRole()); final Employee updatedEmployee =
	 * employeeRepository.save(employee); return ResponseEntity.ok(updatedEmployee);
	 * }
	 */

	// The next endpoint we are creating is DELETE endpoint.
	/*
	 * We are adding a different HTTP method to this using the request method DELETE
	 * This requires the HTTP verb DELETE presented with this API endpoint. If we
	 * use a different verb, we have to specify it in the RequestMapping attributes.
	 * 
	 * @RequestMapping(value = "{id}", method = RequestMethod.DELETE) public void
	 * delete(@PathVariable Integer employeeId) { //Also need to check for children
	 * records before deleting. employeeRepository.deleteById(employeeId); }
	 */
	/*
	 * @DeleteMapping("/delete-employees/{id}") public void
	 * delete(@PathVariable(value = "id") Integer employeeId) { // Employee employee
	 * = employeeRepository.findById(employeeId).get();
	 * employeeRepository.deleteById(employeeId); }
	 */
	@DeleteMapping("/employees/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Integer employeeId)
			throws ResourceNotFoundException {
		return employeeService.deleteEmployee(employeeId);
		/*
		 * @DeleteMapping("/delete-employees/{id}") public Map<String, Boolean>
		 * deleteEmployee(@PathVariable(value = "id") Integer employeeId) { Employee
		 * employee = employeeRepository.findById(employeeId).get();
		 * 
		 * employeeRepository.delete(employee); Map<String, Boolean> response = new
		 * HashMap<>(); response.put("deleted", Boolean.TRUE); return response;
		 */
	}
	
	@PutMapping("/addEmployeesSkill/{id}")
	public Employee addEmployeeSkill(@PathVariable(value="id") Integer employeeId, @RequestBody Skill newSkill)
			throws ResourceNotFoundException {
		Set<Skill> skillSet=new HashSet<Skill>();
		skillSet.add(newSkill);
		return employeeService.addEmployeeSkill(employeeId, skillSet);
	}
	
	@PutMapping("/addEmployeesCourse/{id}")
	public Employee addEmployeeCourse(@PathVariable(value="id") Integer employeeId, @RequestBody Course newCourse)
	throws ResourceNotFoundException {

	return employeeService.addEmployeeCourse(employeeId, newCourse);
	}

	@PutMapping("/updateEmployeesCourse/{id}")
	public Employee updateEmployeeCourse(@PathVariable(value="id") Integer employeeId, @RequestBody Course newCourse)
	throws ResourceNotFoundException {

	return employeeService.updateEmployeeCourse(employeeId, newCourse);
	}

	@PostMapping("/employeeSignIn")
	public Employee signIn(@RequestBody Employee employee) throws ResourceNotFoundException {
		Employee employeeFound=employeeService.loginEmployee(employee);
		if(employeeFound==null) {
			throw new ResourceNotFoundException("Employee Not found");
		}
		return employeeFound;

	}
}