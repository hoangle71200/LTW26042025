package com.fis.thuctap.config;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

import com.fis.thuctap.jwt.JWTConfigurer;
import com.fis.thuctap.jwt.TokenProvider;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfiguration {
	private final AuthEntryPoint authEntryPoint;
	private final TokenProvider tokenProvider;
	private final CorsFilter corsFilter;

	public SecurityConfiguration(TokenProvider tokenProvider, CorsFilter corsFilter, AuthEntryPoint authEntryPoint) {
		this.tokenProvider = tokenProvider;
		this.corsFilter = corsFilter;
		this.authEntryPoint = authEntryPoint;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// @formatter:off
		http.cors().and().csrf().disable().addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and().authorizeRequests()
				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.antMatchers("/api/token").permitAll()
				.antMatchers("/api/reset_password").permitAll()
//				.antMatchers("/api/**").authenticated()
				.antMatchers("/api/**").permitAll()
				.and().exceptionHandling().authenticationEntryPoint(authEntryPoint)
				.and().apply(securityConfigurerAdapter());
		return http.build();
		// @formatter:on
	}

	private JWTConfigurer securityConfigurerAdapter() {
		return new JWTConfigurer(tokenProvider);
	}
}