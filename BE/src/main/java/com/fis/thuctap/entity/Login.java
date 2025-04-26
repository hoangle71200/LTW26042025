package com.fis.thuctap.entity;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Login {

	@NotNull
	@Size(min = 3, max = 10)
	private String username;

	@NotNull
	@Size(min = 1, max = 10)
	private String password;

}
