import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import SkillService from '../services/SkillService'

class AddEmployeeSkillComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeId: this.props.match.params.employeeId,
            skills : []
        }
    }

    cancel() {
        this.props.history.push('/employees');
    }

    componentDidMount() {
        SkillService.getSkills().then((res) => {
            this.setState({skills: res.data });
        });
       
    }

    addemployeeSkill(skill){
       //  let skill = { skillId: this.state.skillId, skillName: this.state.skillName}; 
        console.log('skill => ' + JSON.stringify(skill));

        EmployeeService.addEmployeeSkill(this.state.employeeId, skill).then(res => {
            this.props.history.push('/employees')
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Skills List</h2>
            <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Skill Id</th>
                                <th>Skill Name</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.skills.map(
                                    skill =>
                                        <tr key={skill.skillId}>
                                            <td> {skill.skillId} </td>
                                            <td> {skill.skillName} </td>
                                            <td>
                                                <button onClick={() => this.addemployeeSkill(skill)} className="btn btn-info">Add</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>


                </div>
                <br></br>
                <div className="row">
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </div>

            </div>
            
        )
    }

}

export default AddEmployeeSkillComponent