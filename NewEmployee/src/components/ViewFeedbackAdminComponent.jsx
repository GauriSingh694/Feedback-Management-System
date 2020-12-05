import React, { Component } from 'react'
import FeedbackService from '../services/FeedbackService';

class ViewFeedbackAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feedbackId: this.props.match.params.feedbackId,
            feedback: {}
            
            
        }
    }

    // componentDidMount(){
    //     FeedbackService.getFeedbackReport(this.state.feedbackId).then( res => {
    //         this.setState({feedback: res.data});
    //     })
    // }

    componentDidMount(feedbackId){
        FeedbackService.getFeedbackReportById(this.state.feedbackId).then(res=>{
            this.setState({feedback: res.data});
        })
    }
   

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Feedback Reports</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Feedback Id: </label>
                            <div> { this.state.feedback.feedbackId }</div>
                        </div>
                        <div className = "row">
                            <label> Trainer Id: </label>
                            <div> { this.state.feedback.trainerid }</div>
                        </div>
                        <div className = "row">
                            <label> Participant Id: </label>
                            <div> { this.state.feedback.participantid }</div>
                        </div>
                        <div className = "row">
                            <label> Trainer showed some practical examples: </label>
                            <div> { this.state.feedback.criteria2 }</div>
                        </div>
                        <div className = "row">
                            <label> Trainer provided you with Lab assignments, PPT and Demos: </label>
                            <div> { this.state.feedback.criteria3 }</div>
                        </div>
                        <div className = "row">
                            <label> Trainer was able to solve your queries: </label>
                            <div> { this.state.feedback.criteria4 }</div>
                        </div>
                        <div className = "row">
                            <label> Trainer Rating: </label>
                            <div> { this.state.feedback.criteria5 }</div>
                        </div>
                        <div className = "row">
                            <label> Comments: </label>
                            <div> { this.state.feedback.comments }</div>
                        </div>
                        <div className = "row">
                            <label> Suggestions: </label>
                            <div> { this.state.feedback.suggestions }</div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default ViewFeedbackAdminComponent;