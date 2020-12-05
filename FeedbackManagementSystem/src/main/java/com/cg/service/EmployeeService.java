//This package is created to hold service or logic-based code needed to go into the 
//application
package com.cg.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Course;
import com.cg.model.Employee;
import com.cg.model.Skill;
import com.cg.repository.EmployeeRepository;

@Service
public class EmployeeService implements IEmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;

	public Employee addEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	public List<Employee> viewAllEmployee() {
		return employeeRepository.findAll();

	}

	public List <Employee> getAllTrainer(){
		return employeeRepository.getAllTrainers();
	}


	public Employee viewEmployeeById(Integer employeeId) throws ResourceNotFoundException {
		return employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee Found with this Id: " + employeeId));

	}

	public Employee updateEmployeeDetails(Integer employeeId, Employee newEmployee) throws ResourceNotFoundException {
		Employee existingEmployee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee Found with this Id : " + employeeId));
		BeanUtils.copyProperties(newEmployee, existingEmployee, "employeeid");
		return employeeRepository.saveAndFlush(existingEmployee);

	}

	public Map<String, Boolean> deleteEmployee(Integer employeeId) throws ResourceNotFoundException {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee Found with this Id : " + employeeId));
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public Employee addEmployeeSkill(Integer employeeId, Set<Skill> skill) throws ResourceNotFoundException {
		Employee employee=employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee Found with this Id : " + employeeId));
		if(employee!=null) {
			Set<Skill>prevSkill=employee.getSkill();
			for(Skill s:prevSkill) {
				skill.add(s);
			}
		}
		employee.setSkill(skill);
		return employeeRepository.saveAndFlush(employee);
	}

	@Override
	public Employee addEmployeeCourse(Integer employeeId, Course course) throws ResourceNotFoundException {
		Employee employee=employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee Found with this Id : " + employeeId));
		if(employee!=null && employee.getCourse()==null) {
			employee.setCourse(course);
			return employeeRepository.saveAndFlush(employee);
		}
		return employee;
	}

	@Override
	public Employee updateEmployeeCourse(Integer employeeId, Course course) throws ResourceNotFoundException {
		Employee existingEmployee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("No Employee Found with this Id : " + employeeId));

		Employee newEmployee=new Employee();
		newEmployee.setEmployeeId(existingEmployee.getEmployeeId());
		newEmployee.setEmpName(existingEmployee.getEmpName());
		newEmployee.setPassword(existingEmployee.getPassword());
		newEmployee.setRole(existingEmployee.getRole());
		newEmployee.setSkill(existingEmployee.getSkill());
		newEmployee.setCourse(course);
		BeanUtils.copyProperties(newEmployee, existingEmployee, "employeeid");
		return employeeRepository.saveAndFlush(existingEmployee);
	}

	@Override
	public Employee loginEmployee(Employee employee) throws ResourceNotFoundException {
		// TODO Auto-generated method stub
		return employeeRepository.findByEmployeeIdAndPasswordAndRole(employee.getEmployeeId(), employee.getPassword(),employee.getRole());

	}


}
