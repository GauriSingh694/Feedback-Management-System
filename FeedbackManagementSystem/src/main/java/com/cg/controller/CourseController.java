package com.cg.controller;

//import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Course;
import com.cg.service.CourseService;

//import com.cg.model.Employee;
/**
 * Web Controller deals with HTTP requests and HTTP responses.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CourseController {
	@Autowired
	private CourseService courseService;

	@GetMapping("/courses") // @GetMapping annotation maps to the HTTP GET method.
	public List<Course> viewAllCourses() {
		return courseService.viewAllCourse();

	}

	@GetMapping("/courses/{id}")
	public Course viewCourseById(@PathVariable(value = "id") String courseId) throws ResourceNotFoundException {
		return courseService.viewCourseById(courseId);

	}

	@PostMapping("/courses") // @PostMapping annotation maps to HTTP POST method.
	public Course createCourse(@RequestBody Course course) {

		return courseService.addCourse(course);

	}

	@PutMapping("/courses/{id}") // @PutMapping annotation maps to HTTP PUT method.
	public Course updateCourseDetails(@PathVariable(value = "id") String courseId, @RequestBody Course courseDetails)
			throws ResourceNotFoundException {
		return courseService.updateCourseDetails(courseId, courseDetails);

	}

	@DeleteMapping("/courses/{id}")
	public Map<String, Boolean> deleteCourse(@PathVariable(value = "id") String courseId)
			throws ResourceNotFoundException {
		// System.out.println("Hello");
		return courseService.deleteCourse(courseId);

}
}