import React, { Component } from 'react';
import FeedbackService from '../services/FeedbackService';

class ListFeedbackAdminComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            feedbacks: []
        }
        
    }
    
    viewFeedback(feedbackId){
        this.props.history.push(`/view-feedback/${feedbackId}`)
    }
   
        componentDidMount(){
            FeedbackService.getFeedbackReport().then( res => {
                this.setState({feedbacks: res.data});
            })
        }
    

    
    render() {
        return (
            <div>
                <h2 className="text-center">Feedback Lists</h2>

                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Feedback Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.feedbacks.map(
                                    feedback =>
                                        
                                        <tr key={feedback.feedbackId}>
                                            <td>{feedback.feedbackId}</td>

                                            <td>
                                                
                                                <button  onClick={ ()=> this.viewFeedback(feedback.feedbackId)} className="btn btn-info">View Feedback</button>

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

export default ListFeedbackAdminComponent;