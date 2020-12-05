package com.cg.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
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

import com.cg.model.Skill;
import com.cg.repository.SkillRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/skill")
public class SkillController {
	
	@Autowired
	private SkillRepository skillRepository;

	@GetMapping("/get-all-skills")
	public List<Skill> getAllSkill() {
		List<Skill> allSkilllist = skillRepository.findAll();
		return allSkilllist;
		// return skillRepository.findAll();
	}

	@GetMapping("/get-skill/{id}")
	// @RequestMapping("{id}")
	public Skill getSkillbyId(@PathVariable(value = "id") Integer skillId) {
		Skill skillEntity = skillRepository.findById(skillId).get();
		return skillEntity;
		// return skillRepository.getOne(id);
	}

	@PostMapping("/create-skills")
	public Skill createSkill(@RequestBody Skill skill) {
		Skill savedSkill = skillRepository.save(skill);
		return savedSkill;
	}

	@PutMapping("/update-skills/{id}")
	public Skill update(@PathVariable(value = "id") Integer skillId, @RequestBody Skill skill) {
		Skill existingSkill = skillRepository.findById(skillId).get();
		BeanUtils.copyProperties(skill, existingSkill, "skillid");
		return skillRepository.saveAndFlush(existingSkill);
	}

	@DeleteMapping("/delete-skills/{id}")
	public void delete(@PathVariable(value = "id") Integer skillId) {
		// Skill skill = skillRepository.findById(skillId).get();
		skillRepository.deleteById(skillId);
	}

}
