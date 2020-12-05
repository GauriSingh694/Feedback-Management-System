package com.cg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "feedback", schema = "feedbackmanagementsystem")
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="feedbackid")
	private int feedbackId;

	@NotNull
	@Column(name = "criteria1")
	private int criteria1;
	
	@Column(name = "criteria2")
	private int criteria2;
	
	@Column(name = "criteria3")
	private int criteria3;
	
	@Column(name = "criteria4")
	private int criteria4;
	
	@Column(name = "criteria5")
	private int criteria5;
	
	@Column(name = "comments")
	private String comments;
	
	@Column(name = "suggestions")
	private String suggestions;
	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name ="employeeid")
//	private int employee;
	
	//join table empl id, role, feedid.
//	
//	 @OneToOne(cascade=CascadeType.ALL)
//	    @JoinColumn(name="employeeid")
//	    private Employee employee;
	
	@Column(name = "trainerid")
	private int trainerid;
	
	
	@Column(name = "participantid")
	private int participantid;
//	
//	@Column(name = "trainername")
//	private String trainername;
//	

	

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Feedback(int feedbackId, @NotNull int criteria1, int criteria2,
			int criteria3, int criteria4, int criteria5, String comments, String suggestions, int trainerid, String trainername, int participantid) {
		super();
		this.feedbackId = feedbackId;
		this.criteria1 = criteria1;
		this.criteria2 = criteria2;
		this.criteria3 = criteria3;
		this.criteria4 = criteria4;
		this.criteria5 = criteria5;
		this.comments = comments;
		this.suggestions = suggestions;
		this.trainerid =trainerid;
     	this.participantid = participantid;
     	// this.trainername =trainername;
	
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public int getCriteria1() {
		return criteria1;
	}

	public void setCriteria1(int criteria1) {
		this.criteria1 = criteria1;
	}

	public int getCriteria2() {
		return criteria2;
	}

	public void setCriteria2(int criteria2) {
		this.criteria2 = criteria2;
	}

	public int getCriteria3() {
		return criteria3;
	}

	public void setCriteria3(int criteria3) {
		this.criteria3 = criteria3;
	}

	public int getCriteria4() {
		return criteria4;
	}

	public void setCriteria4(int criteria4) {
		this.criteria4 = criteria4;
	}

	public int getCriteria5() {
		return criteria5;
	}

	public void setCriteria5(int criteria5) {
		this.criteria5 = criteria5;
	}
	
	
	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getSuggestions() {
		return suggestions;
	}

	public void setSuggestions(String suggestions) {
		this.suggestions = suggestions;
	}
	
	public int getTrainerid() {
		return trainerid;
	}


	public void setTrainerid(int trainerid) {
		this.trainerid = trainerid;
	}

	public int getParticipantid() {
		return participantid;
	}


	public void setParticipantid(int participantid) {
		this.participantid = participantid;
	}
	
//	public String getTrainername() {
//		return trainername;
//	}
//	
//	public void setTrainername(String trainername) {
//		this.trainername = trainername;
//	}


	@Override
	public String toString() {
		return "Feedback [feedbackId=" + feedbackId + ", criteria1=" + criteria1 + ", criteria2=" + criteria2
				+ ", criteria3=" + criteria3 + ", criteria4=" + criteria4 + ", criteria5=" + criteria5 + ", comments="
				+ comments + ", suggestions=" + suggestions + ", trainerid=" + trainerid + " , participantid="
				+ participantid + "]";
	}
// , trainername=" + trainername +"

}
