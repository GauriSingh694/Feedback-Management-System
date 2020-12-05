package com.cg.service;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Course;
import com.cg.model.Employee;
import com.cg.model.Skill;

public interface IEmployeeService {
	public Employee addEmployee(Employee employee);

	public List<Employee> viewAllEmployee();

	public List <Employee> getAllTrainer();

	public Employee viewEmployeeById(Integer employeeId) throws ResourceNotFoundException;

	public Employee updateEmployeeDetails(Integer employeeId, Employee newEmployee) throws ResourceNotFoundException;

	public Map<String, Boolean> deleteEmployee(Integer employeeId) throws ResourceNotFoundException;

	public Employee addEmployeeSkill(Integer employeeId,Set<Skill> skill)throws ResourceNotFoundException;

	public Employee addEmployeeCourse(Integer employeeId,Course course)throws ResourceNotFoundException;

	public Employee updateEmployeeCourse(Integer employeeId,Course course)throws ResourceNotFoundException;

	public Employee loginEmployee(Employee employee) throws ResourceNotFoundException;
}
