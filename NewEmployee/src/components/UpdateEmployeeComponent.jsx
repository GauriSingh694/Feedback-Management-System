import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
            // step 2 this.props.match.params.id,
            employeeId: this.props.match.params.employeeId,
            empName: '',
            password: '',
            empNameError:'',
            passwordError:'',
            role: ''
        }
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.employeeId).then(res=>{
            let employee = res.data;
            this.setState({empName: employee.empName,
            password: employee.password,
            role: employee.role});
    });
}

    updateEmployee=(e) => {
        if(this.state.empName === "" || this.state.password ==="" || this.state.role ==="")
        {
            alert('Invalid Input');
        } 
        else
        {
        e.preventDefault();
        let employee = { employeeId: this.state.employeeId, empName: this.state.empName, password: this.state.password, role: this.state.role };
            console.log('employee => ' + JSON.stringify(employee));
    
            EmployeeService.updateEmployee(employee,this.state.employeeId).then(res =>{
              this.props.history.push('/employees')
              })
        }
    }
      
    changeEmployeeNameHandler= (event) => {
        this.setState({empName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeRoleHandler= (event) => {
        this.setState({role: event.target.value});
    }

    handleChange= (event) => {
        this.setState({role: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Employee Name: </label>
                                            <input placeholder="Employee Name" name="empName" className="form-control" 
                                                value={this.state.empName} onChange={this.changeEmployeeNameHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                           <label> Role: </label>
                                           <select value={this.state.value} onChange={this.handleChange}>  
                                           <option value=""></option>   
                                           <option value="Trainer">trainer</option>
                                           <option value="Participant">participant</option>
                                        </select> 
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent;