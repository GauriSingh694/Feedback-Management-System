import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class ControlledForm2 extends React.Component{

    state = {
        //trainers: [],
        trainerid:'Please Select Rating..',
        participantid: '',
        criteria1: 'Please Select Rating..',
        criteria2: 'Please Select Rating..',
        criteria3: 'Please Select Rating..',
        criteria4: 'Please Select Rating..',
        criteria5: 'Please Select Rating..',
        comments: '',
        suggestions: '',

        touched: {
            trainerid: false,
            criteria1: false,
            criteria2: false,
            criteria3: false,
            criteria4: false,
            criteria5: false,
        }
    }

    constructor(props){
        super(props);

        this.handleBlur = this.handleBlur.bind(this);
    }
/*
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
    }
*/

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

       
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        //alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    if(this.state.trainerid !== 'Please Select Rating..' &&  this.state.criteria1 !== 'Please Select Rating..' && this.state.criteria2 !== 'Please Select Rating..' && this.state.criteria3 !== 'Please Select Rating..' && this.state.criteria4 !== 'Please Select Rating..' && this.state.criteria5 !== 'Please Select Rating..'){
            console.log('qwer')
            this.props.addFeedback(this.state);
            window.location='/thankyou';
        }
        else{
            window.alert('Please fill all fields')
        }
       
    }

    handleBlur = (field) => {
        return(
        (event) => {
            this.setState({
                touched: {...this.state.touched, [field]: true}
            });
        })
    }

    validate = (criteria1,criteria2,criteria3,criteria4,criteria5, trainerid) => {
        const errors = {
            trainerid: '',
            criteria1: '',
            criteria2: '',
            criteria3: '',
            criteria4: '',
            criteria5: ''
        }

        if(this.state.criteria2 === 'Please Select Rating..'){
            errors.criteria2 = 'Please Select this..';
        }
        if(this.state.trainerid === 'Please Select Rating..'){
            errors.trainerid = 'Please Select this..';
        }

        if(this.state.criteria3 === 'Please Select Rating..'){
            errors.criteria3 = 'Please Select this..';
        }

        
        if(this.state.criteria4 === 'Please Select Rating..'){
            errors.criteria4 = 'Please Select this..';
        }

        return errors;

    }

    render(){
        const errors = this.validate(this.state.criteria1, this.state.criteria2, this.state.criteria3,
            this.state.criteria4, this.state.criteria5, this.state.trainerid);

            console.log(this.state.trainers);
        return(
            <React.Fragment>
                <div className="container-fluid">

                    <div className="row row-content text-center">

                        <div className="col-12"><br></br>
                            <h3 class="p-3 mb-2 bg-info text-white">Send us your Feedback</h3>
                        </div>

                        <div className="col-12 my-2">

                            <Form onSubmit={(event) => this.handleSubmit(event)}>
                                <br></br>

                            <FormGroup row className="my-2">
   
                             <Label  className="font-weight-bold h5" htmlFor="trainerid" md={2}>Please Select Trainer.</Label>
                                    <Col md={10}>
                                        <Input type="select" name="trainerid"
                                                value={this.state.trainerid}
                                                onChange={(event) => this.handleInputChange(event)}>
                                                    valid={errors.trainerid === ''} invalid={errors.trainerid !== ''}
                                                    <option disabled>Please Select Rating..</option>
                                                    {
                                                    this.props.trainers.map((e) => {
                                                        return(
                                                        <option value={e.employeeId}>{e.empName}</option>
                                                        )
                                                    })}   
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <br></br>
                               <FormGroup row className="my-2">
                                <Label className="font-weight-bold h4" htmlFor="criteria2" md={2}>Trainer showed some practical examples</Label>
                                    <Col md={10}>
                                        <Input type="select" name="criteria2"
                                                value={this.state.criteria2}
                                                onChange={(event) => this.handleInputChange(event)}
                                                valid={errors.criteria2 === ''} invalid={errors.criteria2 !== ''}
                                                onBlur={this.handleBlur('criteria2')}>
                                            <option disabled>Please Select Rating..</option>
                                            <option value='5'>Excellent</option>
                                            <option value='4'>verygood</option>
                                            <option value='3'>good</option>
                                            <option value='2'>Average</option>
                                            <option value='1'>Poor</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <br></br>
                                <FormGroup row className="my-2">
                                <Label  className="font-weight-bold h4" htmlFor="criteria3" md={2}>Trainer provided you with Lab assignments, PPT and Demos</Label>
                                    <Col md={10}>
                                        <Input type="select" name="criteria3"
                                                value={this.state.criteria3}
                                                onChange={(event) => this.handleInputChange(event)}
                                                valid={errors.criteria3 === ''} invalid={errors.criteria3 !== ''}
                                                onBlur={this.handleBlur('criteria3')}>
                                            <option disabled>Please Select Rating..</option>
                                            <option value='5'>Excellent</option>
                                            <option value='4'>verygood</option>
                                            <option value='3'>good</option>
                                            <option value='2'>Average</option>
                                            <option value='1'>Poor</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <br></br>
                                <FormGroup row className="my-2">
                                <Label  className="font-weight-bold h4" htmlFor="criteria4" md={2}>Trainer was able to solve your queries</Label>
                                    <Col md={10}>
                                        <Input type="select" name="criteria4"
                                                value={this.state.criteria4}
                                                onChange={(event) => this.handleInputChange(event)}
                                                valid={errors.criteria4 === ''} invalid={errors.criteria3 !== ''}
                                                onBlur={this.handleBlur('criteria4')}>
                                            <option disabled>Please Select Rating..</option>
                                            <option value='5'>Excellent</option>
                                            <option value='4'>verygood</option>
                                            <option value='3'>good</option>
                                            <option value='2'>Average</option>
                                            <option value='1'>Poor</option>
                                        </Input>
                                    </Col>
                                </FormGroup><br></br>
                                   <div style={{borderTop: 'black solid 1px', borderBottom: 'black solid 1px'}}><p></p>
                                  <FormGroup tag="fieldset" className="container my-2">
                                    <div className="row">
                                    <Label className="col-12 font-weight-bold h5">Trainer Provided with proper material</Label>
                                    </div><br></br>
                                   
                                   <div className="row m-2">
                                    <FormGroup check className="col-12 col-md-6 col-lg-4">
                                    <Label check className="border border-dark my-2">
                                        <Input type="radio" value="5" name="criteria1"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Excellent
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-md-6 col-lg-4">
                                    <Label check className="border border-dark my-2">
                                        <Input type="radio" value="4" name="criteria1"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Very Good
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-md-6 col-lg-4">
                                    <Label check className="border border-dark my-2">
                                        <Input type="radio" value="3" name="criteria1"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Good
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-md-6 col-lg-6">
                                    <Label check className="border border-dark my-2">
                                        <Input type="radio" value="2" name="criteria1"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Average
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-lg-6">
                                    <Label check className="border border-dark my-2">
                                        <Input type="radio" value="1" name="criteria1"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Poor
                                    </Label>
                                    </FormGroup>
                                    </div >
                                </FormGroup>
                                </div>

                                <div style={{borderBottom: 'black solid 1px'}}><p></p>
                                <FormGroup tag="fieldset" className="container my-2">
                                    <div className ="row">
                                    <Label className="col-12 font-weight-bold h5">Please Rate your Training</Label>
                                    </div>
                                    <div className="row m-2">
                                    <FormGroup check className="col-12 col-md-6 col-lg-4">
                                    <Label check className ="border border-dark my-2">
                                        <Input type="radio" value="5" name="criteria5"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Excellent
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-md-6 col-lg-4">
                                    <Label check className ="border border-dark my-2">
                                        <Input type="radio" value="4" name="criteria5"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Very Good
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-md-6 col-lg-4">
                                    <Label check className ="border border-dark my-2">
                                        <Input type="radio" value="3" name="criteria5"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Good
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-md-6 col-lg-6">
                                    <Label check className ="border border-dark my-2">
                                        <Input type="radio" value="2" name="criteria5"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Average
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check className="col-12 col-md-6 col-lg-6">
                                    <Label check className ="border border-dark my-2">
                                        <Input type="radio" value="1" name="criteria5"  onChange={(event) => this.handleInputChange(event)}/>{' '}
                                        Poor
                                    </Label>
                                    </FormGroup>
                                    </div>
                                </FormGroup>
                                </div> <br></br>

                                <FormGroup row>
                                    <Label htmlFor="comments" md={2} className="col-12 font-weight-bold h5">Comments <option disabled>(optional)</option></Label>
                                    <Col md={5}>
                                        <Input type="textarea" id="message" name="comments" placeholder="Write Your valuable comments"
                                            rows="5" value={this.state.comments}
                                            onChange={(event) => this.handleInputChange(event)}></Input>
                                            
                                    </Col>
                                </FormGroup> <br></br>

                                <FormGroup row>
                                    <Label htmlFor="suggestions" md={2}  className="col-12 font-weight-bold h5">Suggestions <option disabled>(optional)</option></Label>
                                    <Col md={5}>
                                        <Input type="textarea" id="message" name="suggestions" placeholder="Help us to Improve"
                                            rows="5" value={this.state.suggestions}
                                            onChange={(event) => this.handleInputChange(event)}></Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        {/* <Link to='/thankyou'> */}
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                        {/* </Link> */}
                                        
                                    </Col>
                                </FormGroup><p></p>

                            </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ControlledForm2;
