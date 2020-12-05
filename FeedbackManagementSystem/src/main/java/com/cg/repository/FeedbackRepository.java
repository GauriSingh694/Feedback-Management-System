package com.cg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.model.Feedback;

@Repository
public interface FeedbackRepository  extends JpaRepository<Feedback, Integer>{

	@Query("select f from Feedback f where f.trainerid = ?1")
    List<Feedback> getfeedbackByTrainer(Integer id);
}
