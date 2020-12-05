package com.cg.service;

import java.util.List;
import java.util.Map;
import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Course;

public interface ICourseService {
	
	public Course addCourse(Course course);

	public List<Course> viewAllCourse();

	public Course viewEmployeeById(String courseId) throws ResourceNotFoundException;

	public Course updateCourseDetails(String courseId, Course newCourse) throws ResourceNotFoundException;

	public Map<String, Boolean> deleteEmployee(String courseId) throws ResourceNotFoundException;

}

