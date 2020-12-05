package com.cg.exception;

public class ApplicationNotFoundException extends RuntimeException {

	// Version
	private static final long serialVersionUID = 1L;

	public ApplicationNotFoundException(String exception) {
		super(exception);
	}
}
