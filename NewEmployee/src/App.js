import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ListCourseComponent from './components/ListCourseComponent';
import CreateCourseComponent from './components/CreateCourseComponent';
import UpdateCourseComponent from './components/UpdateCourseComponent';
import ViewCourseComponent from './components/ViewCourseComponent';
import AddEmployeeSkillComponent from './components/AddEmployeeSkillComponent';
import AddEmployeeCourseComponent from './components/AddEmployeeCourseComponent';
import AdminComponent from './components/AdminComponent';
import Login from './components/Login';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ControlledForm2 from './components/form';
import ThankyouComponent from './components/ThankyouComponent';
import FeedbackForTrainer from './components/FeedbacksTrainer';
import ListFeedbackAdminComponent from './components/ListFeedbackAdminComponent';
import ViewFeedbackAdminComponent from './components/ViewFeedbackAdminComponent';


//Constructor
class App extends React.Component{

      state = {
        trainers: [],
        user: {},
        feedbacktrainers: []
      }


//DidMount
componentDidMount(){
      axios.get('http://localhost:8080/api/v1/employees/trainer')
      .then(response => response.data)
      .then((data) => {
      this.setState({ trainers: data })
      console.log(this.state.trainers)
      })
      .catch(function (error) {
          console.log(error);
      });

      if(localStorage.role === 'Trainer'){
        axios.get(`http://localhost:8080/api/v1/trainers/${localStorage.employeeId}`)
        .then(response => response.data)
        .then((data) => {
        this.setState({ feedbacktrainers: data })
        console.log(this.state.feedbacktrainers)
        })
        .catch(function (error) {
            console.log(error);
        });
      }

      
  }


//AddFeedback Method
onaddFeedback = async(val) => {
      console.log('App wala value')
      console.log(val);
  
      let parid;
      if(localStorage.role === 'Participant'){
              parid = localStorage.employeeId;
      }


const feed = {
      // feedbackId: 17,
      criteria1: parseInt(val.criteria1),
      criteria2: parseInt(val.criteria2),
      criteria3: parseInt(val.criteria3),
      criteria4: parseInt(val.criteria4),
      criteria5: parseInt(val.criteria5),
      comments: val.comments,
      suggestions: val.suggestions,
      trainerid: parseInt(val.trainerid),
      participantid: parseInt(parid)
    }
    console.log(feed)


//axios post
axios.post('http://localhost:8080/api/v1/feedbacks', feed).then((res) => console.log(res)).catch((err) => console.log(err));
}


//render
render() {
      return (
        <Router>
          <HeaderComponent />
          <div className = "container">
          
        <div className="App">
          <Switch>
                  {/* <Route path = "/" exact component = {AdminComponent}></Route> */}
                  <Route path = "/" exact component = {Login}></Route>
                  <Route path = "/admin" exact component = {AdminComponent}></Route>
                  <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                                            <Route path = "/all-courses" component = {ListCourseComponent}></Route>
                                            <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
                                            <Route path = "/update-employee/:employeeId" component = {UpdateEmployeeComponent}></Route>
                                            <Route path = "/view-employee/:employeeId" component = {ViewEmployeeComponent}></Route>
                                            <Route path = "/add-employee-skill/:employeeId" component={AddEmployeeSkillComponent}></Route>
                                            <Route path="/add-update-employee-course/:employeeId" component={AddEmployeeCourseComponent}></Route>
                                            <Route path = "/new-course" component = {CreateCourseComponent}></Route>
                                            <Route path = "/update-course/:courseId" component = {UpdateCourseComponent}></Route>
                                            <Route path = "/view-course/:courseId" component = {ViewCourseComponent}></Route>
                          <Route path="/feedbacks" component={ListFeedbackAdminComponent}></Route>
                          <Route path="/view-feedback/:feedbackId" component={ViewFeedbackAdminComponent}></Route>
                                           {/* <Route path = "/view-feedbacks" component={() => <FeedbackForTrainer feedbacktrainers={this.state.feedbacktrainers}/> } />*/}
          {/* {/* <Route exact path='/' exact component={HeaderComponent}></Route> */}
          <Route path = "/view-feedbacks" component={() => <FeedbackForTrainer feedbacktrainers={this.state.feedbacktrainers}/> } />
          <Route exact path='/thankyou' component={ThankyouComponent} />
         <div style={{border : 'black solid 10px'}}> <Route exact path='/feedback' component={() => <ControlledForm2 trainers={this.state.trainers} addFeedback={(val)=>this.onaddFeedback(val)}/> } /> </div>
         <Redirect to='/' />
         </Switch>
         </div>
         <FooterComponent />
         
        </div>
        </Router>
      );
    }
  }
  
  export default App;

