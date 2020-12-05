package com.cg.testcontroller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

import com.cg.Application;
import com.cg.model.Employee;
import com.cg.model.Role;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class EmployeeControllerIntegrationTest {
	@Autowired
	private TestRestTemplate restTemplate;

	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}

	@Test
	public void contextLoads() {

	}

	@Test
	public void testGetAllEmployee() {
		HttpHeaders header = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, header);
		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/employee/get-all-employee",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}

	@Test
	public void testGetEmployeeById() {
		int id = 100000;
		Employee employee = restTemplate.getForObject(getRootUrl() + "/employee/get-employee/" + id, Employee.class);
		System.out.println(employee.toString());
		assertNotNull(employee.getEmpName());
	}

	@Test
	public void testCreateEmployee() {
		Employee employee = new Employee();
		employee.setEmployeeId(100003);
		employee.setEmpName("Gauri Singh");
		employee.setPassword("GauriS16");
		employee.setRole(Role.Participant);
		ResponseEntity<Employee> postResponse = restTemplate.postForEntity(getRootUrl() + "/employee/create-employee",
				employee, Employee.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdateEmployee() {
		int id = 100002;
		Employee employee = restTemplate.getForObject(getRootUrl() + "/employee/get-employee/" + id, Employee.class);
		employee.setEmpName("Kapila");
		restTemplate.put(getRootUrl() + "/employee/update-employee/" + id, employee);
		Employee updatedEmployee = restTemplate.getForObject(getRootUrl() + "/employee/get-employee/" + id,
				Employee.class);
		assertNotNull(updatedEmployee);
	}

	@Test
	public void testDeleteEmployee() {
		int id = 100001;
		Employee employee = restTemplate.getForObject(getRootUrl() + "/employee/get-employee/" + id, Employee.class);
		System.out.println(employee.toString());
		assertNotNull(employee);
		restTemplate.delete(getRootUrl() + "/employee/delete-employee/" + id);
		try {
			employee = restTemplate.getForObject(getRootUrl() + "/employee/get-employee/" + id, Employee.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}