//This package is created to hold our JPA Entities and Persistence Info
package com.cg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
//import java.util.Set;
//import javax.persistence.ManyToMany;
import javax.persistence.Table;

//import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "skill", schema = "feedbackmanagementsystem")
public class Skill {
	@Id
	@Column(name = "skillid")
	private String skillId;
	@Column(name = "skillname")
	private String skillName;

	/*
	 * Making the relationship bidirectional. Specifying that it is the other side
	 * of the existing many-to-many relationship. It is mapped by skills reffering
	 * to the attribute on the employee class called the skills.
	 */
	/*
	 * @ManyToMany(mappedBy = "skill")
	 * 
	 * @JsonIgnore Adding attribute pointing back to Employee private Set<Employee>
	 * employee;
	 */

	public Skill(String skillId, String skillName) {
		super();
		this.skillId = skillId;
		this.skillName = skillName;
	}

	public Skill() {

	}

	public String getSkillId() {
		return skillId;
	}

	public void setSkillId(String skillId) {
		this.skillId = skillId;
	}

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	/*
	 * public Set<Employee> getEmployee() { return employee; }
	 * 
	 * public void setEmployee(Set<Employee> employee) { this.employee = employee; }
	 */

	@Override
	public String toString() {
		return "Skill [skillId=" + skillId + ", skillName=" + skillName + "]";
	}

}
