package com.fis.thuctap.rest;

import javax.validation.Valid;

import com.fis.thuctap.entity.Login;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fis.thuctap.jwt.TokenProvider;
import com.fis.thuctap.entity.Token;

@RestController
@RequestMapping("/api")
public class JwtApi {
	private final TokenProvider tokenProvider;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;

	public JwtApi(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
		this.tokenProvider = tokenProvider;
		this.authenticationManagerBuilder = authenticationManagerBuilder;
	}

	@PostMapping("/token")
	public ResponseEntity<Token> authorize(@Valid @RequestBody Login login) throws Exception {
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				login.getUsername(), login.getPassword());
		System.out.println("user: "+login.getUsername());
		System.out.println(authenticationToken);
		Authentication authentication;
		String jwt ="";
		try {
			System.out.println("0");
			System.out.println(authenticationManagerBuilder.getObject().authenticate(authenticationToken));
			authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
			System.out.println("1");
			SecurityContextHolder.getContext().setAuthentication(authentication);
			System.out.println("2");
			jwt = tokenProvider.createToken(authentication);
			System.out.println("token: "+jwt);
		}catch (Exception ex)
		{
			System.out.println("Exception Login: "+ ExceptionUtils.getFullStackTrace(ex));
			throw  new Exception("Sai tên đăng nhập hoặc mật khẩu.");
		}

		return new ResponseEntity<>(new Token(jwt), HttpStatus.OK);
	}
}