//This package is created to hold our JPA Entities and Persistence Info
package com.cg.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

//Annotating this as JPA Entity, by adding the class-level annotation
@Entity

// This given below "name" is the name of our database table
@Table(name = "employee", schema = "feedbackmanagementsystem")

public class Employee {

	// @id To specify this attribute is a primary key
	/*
	 * This specifies how the primary key field gets populated on insertion of a new
	 * record. By using the IDENTITY strategy, JPA will utilize the Postgres created
	 * sequence for primary key values.
	 */
	/*
	 * Database primary key fields are set to the serial data type. When we create a
	 * table with serial data type, it creates it as an integer & adds an auto
	 * sequence to it, which we can in sessions_session_id_seq.
	 */
	/*
	 * Postgres will generate a sequenced auto-generated number for our primary key
	 * whenever we insert an record.
	 * 
	 * @GeneratedValue(strategy = GenerationType.IDENTITY)
	 */
	@Id
	@Column(name = "employeeid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	// @NotNull
	// @Range(min = 100000, max = 999999, message = "Employee ID should have atleast 6 Digits starting from 100000")
	// @Min(value = 6, message = "Employee ID should have atleast 6 Digits")
	private int employeeId;
	@Column(name = "empname")
	// This regex allows Alphabets, Dots, Spaces and will also ensure DOT never
	// comes at the start of the name.
	// @Pattern(regexp = "^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$", message = "Employee Name must contain Alphabets, Spaces and Dots while ensuring Dot never comes at the start of the name.")
	private String empName;
	// @Pattern(regexp = "^(?=.*[0-9])\" + \"(?=.*[a-z])(?=.*[A-Z])\" +
	// \"(?=\\\\S+$).{8,20}$", message = "Previous Version")
	// @Pattern(regexp = "^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,12}$", message = "Password must contain at least one letter, at least one number, and must have a Range between 8 to 12 Characters.")
	private String password;
	private Role role;

	/*
	 * @ManyToMany
	 * 
	 * @JoinTable( name="feedbackmanagementsystem.course_participant",
	 * joinColumns= @JoinColumn(name="employeeid"),
	 * inverseJoinColumns= @JoinColumn(name="courseid")) private Set<Course> course;
	 */

	/*
	 * Now, we have two entity models, we can tie them together with a JPA
	 * relationship that will match the database table relationship. Skill and
	 * employee are connected via a union or join table, so we will set up a
	 * many-to-many relationship in our models that will match the database
	 * relationship
	 */
	/*
	 * We need to pick one side of the relationship to be the owner or main
	 * definition point of the relationship. We are using Employee class for this
	 */
	/*
	 * @ManyToMany means if we are setting up a many-to-many relationship that we
	 * have a mapping JoinTable in our database.
	 * 
	 * @JoinTable defines the JoinTable(skill_trainer) and foreign key columns
	 * (employeeid & skillid) to the appropriate tables in the relationship.
	 */
	@ManyToMany
	@JoinTable(name = "skill_trainer", schema = "feedbackmanagementsystem", joinColumns = @JoinColumn(name = "employeeid"), inverseJoinColumns = @JoinColumn(name = "skillid"))
	// After this, JPA will set up the SQL join automatically for us when we make a
	// call to the skills attribute.

	// Adding list of associated skills. Pointiong to skills.
	private Set<Skill> skill;
	
	@ManyToOne
	@JoinTable(name = "course_participant",
	schema = "feedbackmanagementsystem", 
	joinColumns = @JoinColumn(name = "employeeid"), inverseJoinColumns = @JoinColumn(name = "courseid"))
	private Course course;

	// This default constructor helps with serialization & deserialization which
	// will happen when we plug in the controllers later on to marshal into and
	// out of JSON
	public Employee() {
		// super();
	}

	public Employee(int employeeId, String empName, String password, Role role) {
		super();
		this.employeeId = employeeId;
		this.empName = empName;
		this.password = password;
		this.role = role;
	}

	// @Id
	// @Column(name = "employeeid")
	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	/*
	 * public Set<Course> getCourse() { return course; }
	 * 
	 * public void setCourse(Set<Course> course) { this.course = course; }
	 */

	// Now, we have a basic relationship on one side of the many-to-many
	public Set<Skill> getSkill() {
		return skill;
	}

	public void setSkill(Set<Skill> skill) {
		this.skill = skill;
	}
	
	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", empName=" + empName + ", password=" + password + ", role="
				+ role + "]";
	}

}
