package com.cg.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.exception.ResourceNotFoundException;
import com.cg.model.Feedback;
import com.cg.service.FeedbackService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;

	@GetMapping("/feedbacks")
	public List<Feedback> getAllFeedbacks(){
		return feedbackService.viewAllFeedbacks();
	}

	@GetMapping("/trainers/{trainerid}")
	public List<Feedback> getfeedbackByTrainer(@PathVariable Integer trainerid){
		return feedbackService.getfeedbackByTrainer(trainerid);
	 }
	@GetMapping("/feedbacks/{id}")
	public Feedback getFeedbackById(@PathVariable(value = "id") Integer feedbackId)
			throws ResourceNotFoundException {
		return feedbackService.viewFeedbackById(feedbackId);
	}

	@PostMapping("/feedbacks")
	public Feedback createFeedback(@RequestBody Feedback feedback) {
		return feedbackService.addFeedback(feedback);
	}

	@PutMapping("/feedbacks/{id}")
	public Feedback updateFeedback(@PathVariable(value = "id") Integer feedbackId, @RequestBody Feedback newFeedback)
			throws ResourceNotFoundException {
		return feedbackService.updateFeedbackDetails(feedbackId, newFeedback);
	}

	@DeleteMapping("/feedbacks/{id}")
	public  Map<String, Boolean> deleteFeedback(@PathVariable(value = "id") Integer feedbackId)
			throws ResourceNotFoundException {
		System.out.println("Hello");
		return feedbackService.deleteFeedback(feedbackId);
	}

}
