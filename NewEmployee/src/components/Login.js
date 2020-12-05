import React from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../login.css';

class Login extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                param:{
                    employeeId: '',
                    password: '',
                    role: ''
                },
                errorMessage: ''
            }
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        
        handleSubmit = async (e) => {
        e.preventDefault();

        console.log(this.state.param)
                    let resp = null
                    try{
                        resp = await axios.post('http://localhost:8080/api/v1/employeeSignIn', this.state.param)
                    }
                    catch(err){
                        console.log("Error: ",  err.response.data);
                        this.setState({errorMessage: 'Invalid User Id or Password'})
                        //alert('Invalid Input');
                    }

                    console.log(resp);
                            // axios check then put into localStorage
                                localStorage.setItem('role', this.state.param.role);
                                localStorage.setItem('employeeId', this.state.param.employeeId);
                               // this.props.;
                               // return <Redirect to="home" />
                            // if(resp !== null)
                            //     window.location = '/admin';
                            if(resp !== null){
                                if(this.state.param.role === 'Participant'){
                                    window.location = '/feedback';
                                }
                                else if(this.state.param.role === 'Trainer'){
                                     window.location = '/view-feedbacks';
                                }
                                else{
                                    window.location = '/admin';
                                }
                            }
                        }
   
render()
{
    return(
        
        <div className = 'div-login'>
        <div className = 'div-login-logo'>
           {/*<Logo/>*/}
        </div>
        
        <form onSubmit={this.handleSubmit}>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Employee Id</label>
                    <input type="text" className="form-control" placeholder="Enter Employee Id"
                    onChange={(e) => {this.state.param.employeeId = e.target.value; this.setState({errorMessage: ''})}} required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    onChange={(e) => {this.state.param.password=e.target.value}} required />
                </div>

                <div className="form-group" >
                <label>User Type</label>
                <br />
                <span className="mt-1">
                <input type="radio" id = "Radio" name="usertype" onClick={(e) => this.state.param.role=e.target.value} value="Admin" /> Admin
                </span>
                <span className="mt-1">
                <input type="radio" id = "Radio" name="usertype" onClick={(e) => this.state.param.role=e.target.value} value="Trainer" /> Trainer
                </span>
                <span className="mt-1">
                <input type="radio" id = "Radio" name="usertype" onClick={(e) => this.state.param.role=e.target.value} value="Participant" /> Participant
                </span>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
               
                { /* <div className="form-group text-center">
                <input type="submit" value="login" className="btn pl-5 pr-5 rounded-pill btn-primary" required/>
                </div>        
        */}

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
         
    )
}

}
export default Login;
