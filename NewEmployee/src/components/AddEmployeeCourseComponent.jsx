import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import CourseService from '../services/CourseService'


class AddEmployeeCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeId: this.props.match.params.employeeId,
            courses: []
        }
    }

    cancel() {
        this.props.history.push('/employees');
    }

    componentDidMount() {
        CourseService.getCourses().then((res) => {
            this.setState({ courses: res.data });
        });

    }

    addemployeeCourse(course) {
     
        console.log('course => ' + JSON.stringify(course));

        EmployeeService.getEmployeeById(this.state.employeeId).then(res => {
            if (res.data.course === null) {
                EmployeeService.addEmployeeCourse(this.state.employeeId, course).then(res => {
                    // alert("Course:" + JSON.stringify(course) + "added");
                    alert("Course" + "\n Course Id: "+course.courseId +"\n Course Name: "+course.courseName+" added");
                    this.props.history.push('/employees')

                })
            } else {
                if (res.data.course.courseId === course.courseId) {
                    alert("Course is already present, to change the Course Click Update!!");
                } else {
                    alert("Course: \n " + res.data.course.courseName + " Already present, \n To change the Course Click Update!!");
                }
            }



        })

    }

    updateemployeeSkill(course) {
        EmployeeService.getEmployeeById(this.state.employeeId).then(res => {
            if (res.data.course === null) {
                alert("No Course available/added to update.\n Course will be updated only when participant is enrolled in any course earlier. \n To Add Click on Add!!");

            } else {
                if (res.data.course.courseId === course.courseId) {
                    alert("Course is already present");
                } else {
                    EmployeeService.updateEmployeeCourse(this.state.employeeId, course).then(res => {
                        alert("Course: " + course.courseName + " Updated");
                        this.props.history.push('/employees')

                    })
                }
            }
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Courses List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Course Id</th>
                                <th>Course Name</th>
                                <th>Description</th>
                                <th>No of Days</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.courseId}>
                                            <td> {course.courseId} </td>
                                            <td> {course.courseName} </td>
                                            <td> {course.courseDescription} </td>
                                            <td> {course.noOfDays} </td>
                                            <td>
                                                <button onClick={() => this.addemployeeCourse(course)} className="btn btn-info">Add</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.updateemployeeSkill(course)} className="btn btn-info">Update</button>
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

export default AddEmployeeCourseComponent;