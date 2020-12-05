package com.cg.service;

import java.util.List;
import java.util.Map;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Feedback;



public interface IFeedbackService {
	public Feedback addFeedback(Feedback feedback);

	public List<Feedback> viewAllFeedbacks();

	public Feedback viewFeedbackById(int feedbackId) throws ResourceNotFoundException;

	public Feedback updateSFeedbackDetails(Feedback feedbackId, Feedback newFeedback) throws ResourceNotFoundException;

	public Map<String, Boolean> deleteFeedback(int feedbackId) throws ResourceNotFoundException;
	
	public List<Feedback> getfeedbackByTrainer();
}
