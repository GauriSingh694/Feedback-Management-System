import React, { Component } from 'react';

class FeedbackPageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            feedback: []
        }
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
                                this.state.feedback.map(
                                    feedback =>
                                        <tr key={feedback.feedbackId}>
                                            <td></td>

                                            <td>
                                                
                                                <button style={{marginLeft:"10px"}} onClick={ ()=> this.viewFeedback(feedback.feedbackId)} className="btn btn-info">View Feedback</button>

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

export default FeedbackPageComponent;