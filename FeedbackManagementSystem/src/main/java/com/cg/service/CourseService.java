package com.cg.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.PathVariable;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Course;
import com.cg.repository.CourseJpaRepository;

@Service
public class CourseService {
	@Autowired
	private CourseJpaRepository courseRepo;

	public Course addCourse(Course course) {
		return courseRepo.save(course);
	}

	public List<Course> viewAllCourse() {
		return courseRepo.findAll();

	}

	public Course viewCourseById(String courseId) throws ResourceNotFoundException {
		return courseRepo.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("No Course Found with this Id: " + courseId));

	}

	public Course updateCourseDetails(String courseId, Course courseDetails) throws ResourceNotFoundException {
		Course course = courseRepo.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("No Course Found with this Id : " + courseId));
		course.setCourseName(courseDetails.getCourseName());
		course.setCourseDescription(courseDetails.getCourseDescription());
		course.setNoOfDays(courseDetails.getNoOfDays());
		Course updatedCourse = courseRepo.save(course);
		return updatedCourse;

	}

	public Map<String, Boolean> deleteCourse(String courseId) {
		Course course = courseRepo.findById(courseId).get();
		courseRepo.delete(course);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
