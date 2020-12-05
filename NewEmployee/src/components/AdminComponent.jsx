import React, { Component } from 'react';

class AdminComponent extends Component {
    constructor(props){
        super(props)
        
        this.viewCoursePage = this.viewCoursePage.bind(this);
        this.viewEmployeePage = this.viewEmployeePage.bind(this);
        this.viewFeedbackPage=this.viewFeedbackPage.bind(this);
    };


    viewEmployeePage(){
        this.props.history.push('/employees')   
    }
    viewCoursePage()
    {
        this.props.history.push('/all-courses')
    }
    viewFeedbackPage()
    {
        this.props.history.push('/feedbacks')
    }
    render() {
        return (
            <div>
                
                <header>
                    { /* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.capgemini.com/in-en/" className="navbar-brand">Feedback Management System</a></div> 
        </nav> */}
                </header>
            
                <div className="container"> 
                <div className="row">
                    <div className="col-sm-12 text-center">
                    <button className="btn btn-primary btn-md center-block"   style={{margin:"10px"}} onClick={this.viewEmployeePage}>Employee Management System</button>
                    <button className="btn btn-primary btn-md center-block"  onClick={this.viewCoursePage}>Course Management System</button>
                    <button className="btn btn-primary btn-md center-block" style={{margin:"10px"}} onClick={this.viewFeedbackPage}>View Feedback Report</button>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default AdminComponent;

