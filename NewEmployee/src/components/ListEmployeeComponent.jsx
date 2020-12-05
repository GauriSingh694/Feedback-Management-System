import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    deleteEmployee(employeeId){
        EmployeeService.deleteEmployee(employeeId).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.employeeId !== employeeId)});
        });
    }
    viewEmployee(employeeId){
        this.props.history.push(`/view-employee/${employeeId}`);
    }
    editEmployee(employeeId){
        this.props.history.push(`/update-employee/${employeeId}`);
    }

    addEmployeeSkill(employeeId) {
        this.props.history.push(`/add-employee-skill/${employeeId}`);
    }

    addEmployeeCourse(employeeId) {
        this.props.history.push(`/add-update-employee-course/${employeeId}`);
    }

    addEmployee(){
        this.props.history.push(`/add-employee`);
    }

    checkCourseAvailable(employee) {
        console.log(employee);
        if (!employee.course) {
            return "No course Enrolled";
        } else {
            return employee.course.courseName;
        }
    }

    checkSkillAvailable(employee) {
        if (!employee.skill) {
            return "No Skill Updated";
        } else {
            var skill = [];
            for (var i = 0; i < employee.skill.length; i++) {
                skill.push(employee.skill[i].skillName);
            }
            return skill;
        }
    }

    render() {
        return (
            <div>
            <div>
                 <h2 className="text-center">Trainer List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Trainer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Employee Id </th>
                                    <th> Employee Name </th>
                                    <th> Password </th>
                                    <th> Role </th>
                                    <th>Skill</th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => {
                                            if (employee.role==='Trainer')
                                       return     <tr key={employee.employeeId}>
                                                <td> {employee.employeeId} </td>
                                                <td> {employee.empName} </td>
                                                <td> {employee.password} </td>
                                                <td> {employee.role} </td>
                                                <td> {this.checkSkillAvailable(employee)}</td>
                                                <td>
                                                    <button onClick={() => this.editEmployee(employee.employeeId)} className="btn btn-info">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.employeeId)} className="btn btn-danger">Delete </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.employeeId)} className="btn btn-info">View </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.addEmployeeSkill(employee.employeeId)} className="btn btn-info">Add Skill </button>
                                                </td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

                </div>

                <br></br>
                <br></br>


            <div>
                 <h2 className="text-center">Participant List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Participant</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Employee Id </th>
                                    <th> Employee Name </th>
                                    <th> Password </th>
                                    <th> Role </th>
                                    <th> Course Enrolled </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => {
                                            if (employee.role==='Participant')
                                       return     <tr key={employee.employeeId}>
                                                <td> {employee.employeeId} </td>
                                                <td> {employee.empName} </td>
                                                <td> {employee.password} </td>
                                                <td> {employee.role} </td>
                                                <td>{this.checkCourseAvailable(employee)}</td>
                                                <td>
                                                    <button onClick={() => this.editEmployee(employee.employeeId)} className="btn btn-info">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.employeeId)} className="btn btn-danger">Delete </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.employeeId)} className="btn btn-info">View </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.addEmployeeCourse(employee.employeeId)} className="btn btn-info">Add Course </button>
                                                </td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

                </div>
                </div>

            
            
        )
    }
}

export default ListEmployeeComponent