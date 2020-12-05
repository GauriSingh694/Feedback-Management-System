import React from 'react';
import { Button, Col} from 'reactstrap';

class FeedbackForTrainer extends React.Component{

    state ={ 
        showfeeds: false
    }

    render(){
        console.log(this.props);
        return(
        <>  <br></br>
         <Col md={{size: 8, offset: 2}}>
        <Button color="primary" onClick={()=>this.setState({showfeeds: !this.state.showfeeds})}>
        View feedbacks 
        </Button></Col>
        <br></br>{(this.state.showfeeds) ? (
            <table class="table table-bordered table-striped">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Criteria1</th>
                <th scope="col">Criteria2</th>
                <th scope="col">Criteria3</th>
                <th scope="col">Criteria4</th>
                <th scope="col">Criteria5</th>
                <th scope="col">Criteria6</th>
                <th scope="col">Comments</th>
                <th scope="col">Suggestions</th>
                </tr>
            </thead>
            <tbody>
                {this.props.feedbacktrainers.map((feed, index) => {
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{feed.criteria1}</td>
                            <td>{feed.criteria2}</td>
                            <td>{feed.criteria3}</td>
                            <td>{feed.criteria4}</td>
                            <td>{feed.criteria5}</td>
                            <td>{feed.comments}</td>
                            <td>{feed.suggestions}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        ): <div></div>}                     
        
        </>
        )
    }
}

export default FeedbackForTrainer;
