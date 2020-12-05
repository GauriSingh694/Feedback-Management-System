//This package is created to hold our JPA Entities and Persistence Info
package com.cg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course", schema="feedbackmanagementsystem")
public class Course {


	@Id
	@Column(name="courseid")
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String courseId;
	@Column(name="coursename")
	private String courseName;
	@Column(name="coursedesc")
	private String courseDescription;
	@Column(name="noofdays")
	private int noOfDays;

	public Course(String courseId, String courseName, String courseDescription, int noOfDays) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDescription = courseDescription;
		this.noOfDays = noOfDays;
	}

	public Course() {

	}

	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	public int getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(int noOfDays) {
		this.noOfDays = noOfDays;
	}

	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName + ", courseDescription="
				+ courseDescription + ", noOfDays=" + noOfDays + "]";
	}

}
