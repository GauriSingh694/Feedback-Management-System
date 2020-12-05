package com.cg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Skill;
import com.cg.repository.SkillRepository;

@Service
public class SkillService {
	@Autowired
	private SkillRepository skillRepository;

	//to add new Course
	public Skill createSkill(@RequestBody Skill skill) {
		return skillRepository.save(skill);
	}


	//to update course
	public Skill updateSkill(@PathVariable int skillId,
			@RequestBody Skill skillUpdated) throws ResourceNotFoundException {
		Skill skill = skillRepository.findById(skillId)
				.orElseThrow(() -> new ResourceNotFoundException("No Skill Found with this Id : " + skillId));
		skill.setSkillName(skillUpdated.getSkillName());
		return skillRepository.save(skill);
	}

	//to delete Course
	public String deleteSkill(@PathVariable int skillId) throws ResourceNotFoundException 
	{
		Skill skill = skillRepository.findById(skillId)
				.orElseThrow(() -> new ResourceNotFoundException("No Skill Found with this Id : " + skillId));
		skillRepository.delete(skill);
		return  "Deleted Successfully!";

	}

	//to view all Course
	public List<Skill> getAllSkills() 
	{
		return skillRepository.findAll();
	}

	//to get Course by id
	public Skill viewSkillById(@PathVariable(value = "id") int skillId)
			throws ResourceNotFoundException {
		return skillRepository.findById(skillId)
				.orElseThrow(() -> new ResourceNotFoundException("No Skill Found with this id : " + skillId));	
	}

}

