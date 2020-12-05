import React, { Component } from 'react';
// import CourseService from '../service/CourseService';
import CourseService from '../services/CourseService';
// import './App.css';

class ListCourseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
        // this.viewCourse=this.viewCourse(this);
        this.addCourse=this.addCourse.bind(this);
        this.editCourse=this.editCourse.bind(this);
        this.deleteCourse=this.deleteCourse.bind(this);
    }

    componentDidMount(){
        CourseService.getCourses().then((res)=>{
            this.setState({courses: res.data});
        })
    }

    deleteCourse(courseId){
        CourseService.deleteCourse(courseId).then( res=>{
            this.setState({courses: this.state.courses.filter(course=>course.courseId !== courseId)})
        })
    }

    viewCourse(courseId){
        this.props.history.push(`/view-course/${courseId}`)
    }
    
    editCourse(courseId){
this.props.history.push(`/update-course/${courseId}`)
    }

    addCourse(){
        this.props.history.push('/new-course')
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Courses List</h2>
                <div className="row">
                    <button style={{margin:"10px"}} className="btn btn-primary" onClick={this.addCourse}>Add Course</button>
                </div>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Course Id</th>
                                <th>Course Name</th>
                                <th>Course Description</th>
                                <th>No.Of.Days</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.courseId}>
                                            <td>{course.courseId}</td>
                                            <td>{course.courseName}</td>
                                            <td>{course.courseDescription}</td>
                                            <td>{course.noOfDays}</td>
                                            <td>
                                                <button onClick={ ()=> this.editCourse(course.courseId)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick={ ()=> this.deleteCourse(course.courseId)} className="btn btn-danger">Delete</button>
                                                <button style={{marginLeft:"10px"}} onClick={ ()=> this.viewCourse(course.courseId)} className="btn btn-info">View</button>

                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCourseComponent;