import React, { Component } from 'react';
// import CourseService from '../service/CourseService';
import CourseService from '../services/CourseService.js';

class UpdateCourseComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            courseId: this.props.match.params.courseId,//courseId
            courseName:'',
            courseDescription:'',
            noOfDays: ''

        }
        this.changeCourseNameHandler=this.changeCourseNameHandler.bind(this);
        this.changeCourseDescriptionHandler=this.changeCourseDescriptionHandler.bind(this);
        this.changeNoOfDaysHandler=this.changeNoOfDaysHandler.bind(this);
        this.updateCourse=this.updateCourse.bind(this);
    }

    componentDidMount(){
        CourseService.getCourseById(this.state.courseId).then(res=>{
            let course = res.data;
            this.setState({courseName:course.courseName,
                courseDescription:course.courseDescription,
                noOfDays:course.noOfDays});
        });
    }
    
    updateCourse=(e)=>{
        if(this.state.courseId ==="" || this.state.courseName === "" || this.state.courseDescription ==="" || this.state.noOfDays ==="")
        {
            alert('Invalid Input');
        } 
        else
        {
        e.preventDefault();
        let course ={courseName: this.state.courseName, courseDescription: this.state.courseDescription, noOfDays: this.state.noOfDays};
        console.log('course =>'+ JSON.stringify(course));

        CourseService.updateCourse(course,this.state.courseId).then(res=>{
            this.props.history.push('/all-courses')
        })
        
    }
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
        this.props.history.push('/all-courses')
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Update Course</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Course Name: </label>
                                        <input placeholder="Enter Course Name" name="courseName" className="form-control"
                                        value={this.state.courseName} onChange={this.changeCourseNameHandler} required/>
                                    </div>
                                    <div className = "form-group">
                                            <label> Course Description: </label>
                                            <input placeholder="Enter Course Description" name="courseDescription" className="form-control" 
                                                value={this.state.courseDescription} onChange={this.changeCourseDescriptionHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> No Of Days: </label>
                                            <input placeholder="Enter No of days" name="noOfDays" className="form-control" 
                                                value={this.state.noOfDays} onChange={this.changeNoOfDaysHandler} required/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateCourse}>Save</button>
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

export default UpdateCourseComponent;