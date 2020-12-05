import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class ViewCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseId: this.props.match.params.courseId,
            course: {}
        }
    }
    componentDidMount() {
        CourseService.getCourseById(this.state.courseId).then(res => {
            this.setState({ course: res.data });
        })
    }
    render() {
        return (
            <div>
                <br /><br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Course Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Course Name: </label>
                            <div>{ this.state.course.courseName }</div>
                        </div>
                        <div className="row">
                            <label>Course Description: </label>
                            <div>{ this.state.course.courseDescription }</div>
                        </div>
                        <div className="row">
                            <label>No Of Days: </label>
                            <div>{ this.state.course.noOfDays }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCourseComponent;