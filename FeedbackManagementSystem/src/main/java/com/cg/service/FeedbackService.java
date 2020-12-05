package com.cg.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Feedback;
import com.cg.repository.FeedbackRepository;


@Service
public class FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepository;

	public Feedback addFeedback(Feedback feedback) {
	return feedbackRepository.save(feedback);
}
	
	public List<Feedback> viewAllFeedbacks(){
		return feedbackRepository.findAll();
	}
	
	public List<Feedback> getfeedbackByTrainer(Integer trainerid){
        return feedbackRepository.getfeedbackByTrainer(trainerid);
    }
	
	public Feedback viewFeedbackById(Integer feedbackId) throws ResourceNotFoundException {
		return feedbackRepository.findById(feedbackId)
				.orElseThrow(() -> new ResourceNotFoundException("No Feedback Found with this id : " + feedbackId));
	}
	
	public Feedback updateFeedbackDetails(Integer feedbackId,Feedback newFeedback) throws ResourceNotFoundException {
		Feedback existingFeedback = feedbackRepository.findById(feedbackId)
				.orElseThrow(() -> new ResourceNotFoundException("No Feedback Found with this Id : " + feedbackId));
		BeanUtils.copyProperties(newFeedback, existingFeedback, "feedbackId");
		return feedbackRepository.saveAndFlush(existingFeedback);
}
	
	public Map<String, Boolean> deleteFeedback(int feedbackId) throws ResourceNotFoundException {
		Feedback feedback = feedbackRepository.findById(feedbackId)
				.orElseThrow(() -> new ResourceNotFoundException("No Feedback Found with this Id : " + feedbackId));
		feedbackRepository.delete(feedback);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
