package com.cg.testcontroller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

//@SpringBootTest(classes=CourseController.class)
@SpringBootTest
public class CourseControllerTest 
{
	@Autowired
	private MockMvc mockMvc;
	
	//@Test 
//	public void createCourse()
//	{
//		mockMvc.perform(post("courses/newcourse")
//				.contentType(MediaType.APPLICATION_JSON)
//				.content(toJson))
//		
//	}

}
