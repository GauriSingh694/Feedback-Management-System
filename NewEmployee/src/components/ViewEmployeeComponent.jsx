import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
//import SkillService from '../services/SkillService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeId: this.props.match.params.employeeId,
            employee: {},
            // skillId: this.props.match.params.skillId,
            // skill : {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.employeeId).then( res => {
            this.setState({employee: res.data});
            
        })
        // SkillService.getSkillById(this.state.skillId).then((res) => {
        //     this.setState({skill: res.data });
        // });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Employee Id: </label>
                            <div> { this.state.employee.employeeId }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Name: </label>
                            <div> { this.state.employee.empName }</div>
                        </div>
                        <div className = "row">
                            <label> Password: </label>
                            <div> { this.state.employee.password }</div>
                        </div>
                        <div className = "row">
                            <label> Role: </label>
                            <div> { this.state.employee.role }</div>
                        </div>
                        {/* <div className = "row">
                            <label> Skill Id: </label>
                            <div> { this.state.skill.skillId }</div>
                        </div>
                        <div className = "row">
                            <label> Skill Name: </label>
                            <div> { this.state.skill.skillName }</div>
                        </div>*/}
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent