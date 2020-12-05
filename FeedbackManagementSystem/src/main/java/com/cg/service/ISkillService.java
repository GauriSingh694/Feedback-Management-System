package com.cg.service;

import java.util.List;
import java.util.Map;
import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Skill;

public interface ISkillService {
	public Skill addSkill(Skill skill);

	public List<Skill> viewAllSkill();

	public Skill viewSkillById(Integer skillId) throws ResourceNotFoundException;

	public Skill updateSkillDetails(Integer skillId, Skill newSkill) throws ResourceNotFoundException;

	public Map<String, Boolean> deleteEmployeeSkill(Integer skillId) throws ResourceNotFoundException;

}
