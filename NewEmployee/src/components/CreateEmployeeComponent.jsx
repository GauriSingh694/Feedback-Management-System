import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeId: '',
            empName: '',
            password: '',
            empNameError:'',
            passwordError:'',
            role: ''
        }
        
  
        this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    saveEmployee = (e) => {
        
        if(this.state.empName === "" || this.state.password ==="" || this.state.role ==="")
        {
            alert('Invalid Input');
        } else{
            e.preventDefault();
            let employee = {employeeId: this.state.employeeId, empName: this.state.empName, password: this.state.password, role: this.state.role};
            console.log('employee => ' + JSON.stringify(employee));
    
            EmployeeService.createEmployee(employee).then(res =>{
              this.props.history.push('/employees');
              });
           
        }
    }
    

    changeEmployeeIdHandler= (event) => {
        this.setState({employeeId: event.target.value});
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
                            <h3 className="text-center">Add Employee</h3>
                                <div className = "card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className = "form-group">
                                            <label> Employee Name: </label>
                                            <input placeholder="Employee Name" size='5' name="empName"  className="form-control" 
                                                value={this.state.empName} onChange={this.changeEmployeeNameHandler} required />
                                                <div>{this.state.empNameError}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler} required />
                                                <div>{this.state.passwordError}</div>
                                        </div>

                                        <div className = "form-group">
                                           <label> Role: </label>
                                           <select value={this.state.value} onChange={this.handleChange}>  
                                           <option value=""></option>   
                                           <option value="Trainer">trainer</option>
                                           <option value="Participant">participant</option>
                                        </select> 
                                        
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
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

export default CreateEmployeeComponent;

/*<input type="search" list="mylist" 
                                            
                                            {placeholder="Role" name="role" className="form-control" 
                                                value={this.state.role} onChange={this.changeRoleHandler}/>
                                             <input type="text"></input> */

   