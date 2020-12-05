import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1";


class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees");
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + "/employees", employee);
    }

    getEmployeeById(employeeId) {
       
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees/"+ employeeId);
    }

    updateEmployee(employee, employeeId) {
        console.log(EMPLOYEE_API_BASE_URL + "/employees/" + employeeId);
        return axios.put(EMPLOYEE_API_BASE_URL +  "/employees/" + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/employees/" + employeeId);
    }

    addEmployeeSkill(employeeId, skill) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/addEmployeesSkill/" + employeeId, skill);
    }

    addEmployeeCourse(employeeId, course) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/addEmployeesCourse/" + employeeId,course);
    }

    updateEmployeeCourse(employeeId, course) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/updateEmployeesCourse/" + employeeId, course);
    }
}

export default new EmployeeService()