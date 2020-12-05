import axios from 'axios';

const FEEDBACK_API_BASE_URL = "http://localhost:8080/api/v1/feedbacks";

class FeedbackService{

    getFeedbackReport(){
        return axios.get(FEEDBACK_API_BASE_URL);
    }

    createFeedback(feedback){
        return axios.post(FEEDBACK_API_BASE_URL, feedback);
    }

    getFeedbackReportById(feedbackId){
        return axios.get(FEEDBACK_API_BASE_URL + '/' + feedbackId);
    }
}
// export default FeedbackService;
 export default new FeedbackService();