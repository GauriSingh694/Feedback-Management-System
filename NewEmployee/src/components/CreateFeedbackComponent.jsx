import React, { Component } from 'react'
import { Form, FormGroup } from 'react-bootstrap';
import FeedbackService from '../Services/FeedbackService';

class createFeedbackComponent extends Component {
 constructor(props){
     super(props)
     this.state = {
         feedbackId : '',
         criteria1 : '',
         criteria2 : '',
         criteria3 : '',
         criteria4 : '',
         criteria5 : '',
         comments : '',
         suggestions : ''
     }

     this.changeFeedbackIdHandler = this.changeFeedbackIdHandler.bind(this);
     this.changecriteria1Handler = this.changecriteria1Handler.bind(this);
     this.changecriteria2Handler = this.changecriteria2Handler.bind(this);
     this.changecriteria3Handler = this.changecriteria3Handler.bind(this);
     this.changecriteria4Handler = this.changecriteria4Handler.bind(this);
    this.changecriteria5Handler = this.changecriteria5Handler.bind(this);
    this.changecommentsHandler = this.changecommentsHandler.bind(this);
    this.changesuggestionsHandler = this.changesuggestionsHandler.bind(this);
}

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
    alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
}

submitFeedback = (e) => {
    e.preventDefault();
    let feedback = {feedbackId: this.state.feedbackId,
                    criteria1: this.state.criteria1,
                    criteria2: this.state.criteria2,
                    criteria3: this.state.criteria3,
                    criteria4: this.state.criteria4,
                    criteria5: this.state.criteria5,
                    comments: this.state.comments,
                    suggestions: this.state.suggestions
        };
        console.log('feedback => ' + JSON.stringify(feedback));

        FeedbackService.createFeedback(feedback).then(res =>{
            this.props.history.push('/feedbacks')
        });
}

changeFeedbackIdHandler= (event) => {
    this.setState({feedbackId: event.target.value});
}

changecriteria1Handler= (event) => {
    this.setState({criteria1: event.target.value});
}

changecriteria2Handler= (event) => {
    this.setState({criteria2: event.target.value});
}

changecriteria3Handler= (event) =>{
    this.setState({criteria3: event.target.value});
}

changecriteria4Handler= (event) => {
    this.setState({criteria4: event.target.value});
}

changecriteria5Handler= (event) => {
    this.setState({criteria5: event.target.value});
}

changecommentsHandler= (event) => {
    this.setState({comments: event.target.value});
}

changesuggestionsHandler= (event) => {
    this.setState({suggestions: event.target.value});
}



render() {
    return(
        <div> <h1>ABC</h1></div>
    )
}

}
export default createFeedbackComponent;