package com.cg.testservice;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Employee;
import com.cg.model.Role;
import com.cg.repository.EmployeeRepository;
import com.cg.service.EmployeeService;

@RunWith(SpringRunner.class)
@SpringBootTest
class EmployeeServiceUnitTest {

	@MockBean
	EmployeeRepository repository;

	@Autowired
	EmployeeService employeeService;

	@Test
	public void testGetAllEmployee() {
		Employee emp1 = new Employee(100001, "Sumanth", "sumanth", Role.Participant);
		Employee emp2 = new Employee(100002, "Priyanka", "priyanka", Role.Participant);
		List<Employee> empList = new ArrayList<>();
		empList.add(emp1);
		empList.add(emp2);
		Mockito.when(repository.findAll()).thenReturn(empList);
		assertThat(employeeService.viewAllEmployee()).isEqualTo(empList);

	}

	@Test
	public void testShouldStoreAnEmployee() {
		Employee employee = new Employee();
		employee.setEmployeeId(100005);
		employee.setEmpName("Kapila");
		employee.setPassword("Kapila123");
		employee.setRole(Role.Participant);
		Mockito.when(repository.save(employee)).thenReturn(employee);

		assertThat(employeeService.addEmployee(employee)).isEqualTo(employee);

	}

	@Test
	public void testGetEmployeeById() {
		Employee employee = new Employee();
		employee.setEmployeeId(100005);
		employee.setEmpName("Kapila");
		employee.setPassword("Kapila123");
		employee.setRole(Role.Participant);

		Mockito.when(repository.findById(employee.getEmployeeId())).thenReturn(Optional.of(employee));
		try {
			assertThat(employeeService.viewEmployeeById(employee.getEmployeeId())).isEqualTo(employee);
		} catch (ResourceNotFoundException e) {
			System.out.println("Unexpected Error!!!");
		}
	}

	@Test
	public void testUpdateEmployee() {
		Employee emp = new Employee(100002, "Priyanka", "priyanka", Role.Participant);

		Employee updatedEmp = new Employee(100002, "Priyanka Jadhav", "priyanka", Role.Participant);

		Mockito.when(repository.findById(emp.getEmployeeId())).thenReturn(Optional.of(emp));
		Mockito.when(repository.saveAndFlush(emp)).thenReturn(updatedEmp);
		try {
			assertThat(employeeService.updateEmployeeDetails(emp.getEmployeeId(), updatedEmp)).isEqualTo(updatedEmp);
		} catch (ResourceNotFoundException e) {
			System.out.println("Unexpected Error!!!");
		}
	}

	@Test
	public void testDeleteEmployeeById() {
		Employee emp = new Employee(100001, "Sumanth", "sumanth", Role.Participant);
		Mockito.when(repository.findById(emp.getEmployeeId())).thenReturn(Optional.of(emp));
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		try {
			assertThat(employeeService.deleteEmployee(emp.getEmployeeId())).isEqualTo(response);
		} catch (ResourceNotFoundException e) {
			System.out.println("Unexpected Error!!!");
			
		/*
		 * @Test
public void testdeleteCourse()//NOSONAR
{
Course course = new Course("COURSE0001","JEE Full Stack with React","LOT: JEE , Variant: React",48);
Mockito.when(repository.findById(course.getCourseId())).thenReturn(Optional.of(course));
Map<String,Boolean> response = new HashMap<>();
response.put("deleted", Boolean.TRUE);
assertThat(courseServiceImpl.deleteACourse(course.getCourseId())).isEqualTo(response);

}
		 */
		}
	}

}
