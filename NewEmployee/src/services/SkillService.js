import axios from 'axios';
 
const SKILL_API_BASE_URL = "http://localhost:8080/api/skill";
 
class SkillService {
 
    getSkills() {
        return axios.get(SKILL_API_BASE_URL +"/get-all-skills");
    }
 
    
}
 
export default new SkillService()