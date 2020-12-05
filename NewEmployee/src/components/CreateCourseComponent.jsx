import React, { Component } from 'react';
import CourseService from '../services/CourseService.js';

class CreateCourseComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            courseId:'',
            courseName:'',
            courseDescription:'',
            noOfDays: ''

        }
        this.changeCourseIdHandler = this.changeCourseIdHandler.bind(this);
        this.changeCourseNameHandler=this.changeCourseNameHandler.bind(this);
        this.changeCourseDescriptionHandler=this.changeCourseDescriptionHandler.bind(this);
        this.changeNoOfDaysHandler=this.changeNoOfDaysHandler.bind(this);
        this.saveCourse=this.saveCourse.bind(this);
        
    }


    saveCourse=(e)=>{
          
        if(this.state.courseId ==="" || this.state.courseName === "" || this.state.courseDescription ==="" || this.state.noOfDays ==="")
        {
            alert('Invalid Input');
        } else{
        e.preventDefault();
        let course ={courseId: this.state.courseId, courseName: this.state.courseName, courseDescription: this.state.courseDescription, noOfDays: this.state.noOfDays};
        console.log('course =>'+ JSON.stringify(course));

        CourseService.createCourse(course).then(res =>{
            this.props.history.push(`/all-courses`);
        });
    }
}


    changeCourseIdHandler= (event) => {
        this.setState({courseId: event.target.value});
    }
    changeCourseNameHandler=(event)=>{
        this.setState({courseName: event.target.value});
    }
    changeCourseDescriptionHandler=(event)=>{
        this.setState({courseDescription: event.target.value});
    }
    changeNoOfDaysHandler=(event)=>{
        this.setState({noOfDays:event.target.value});
    }
    cancel(){
        this.props.history.push(`/all-courses`);
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add Course</h3>
                            <div className="card-body">
                                <form>
                                <div className = "form-group">
                                            <label> Course Id: </label>
                                            <input placeholder="Course Id" name="courseId" className="form-control" 
                                                value={this.state.courseId} onChange={this.changeCourseIdHandler} required/>
                                        </div>
                                    <div className="form-group">
                                        <label> Course Name: </label>
                                        <input placeholder="Enter Course Name" name="courseName" className="form-control"
                                        value={this.state.courseName} onChange={this.changeCourseNameHandler} required/>
                                    </div>
                                    <div className = "form-group">
                                            <label> Course Description: </label>
                                            <input placeholder="Enter Course Description" name="courseDescription" className="form-control" 
                                                value={this.state.CourseDescription} onChange={this.changeCourseDescriptionHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> No Of Days: </label>
                                            <input placeholder="Enter No of days" name="noOfDays" className="form-control" 
                                                value={this.state.noOfDays} onChange={this.changeNoOfDaysHandler} required/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveCourse}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default CreateCourseComponent;