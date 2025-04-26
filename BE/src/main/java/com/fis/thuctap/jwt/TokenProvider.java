package com.fis.thuctap.jwt;

import java.util.Base64;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.fis.thuctap.entity.Users;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class TokenProvider {
	private static final String SECRET = Base64.getEncoder().encodeToString("TCT2022~!@#$%^&*()_+secret".getBytes());
	private static final long EXPIRED = 86400000;

	public String createToken(Authentication authentication) {
		Users user = (Users) authentication.getPrincipal();
		Map<String, Object> claims = new HashMap<String, Object>();
		claims.put("name", user.getName());
		claims.put("email", user.getEmail());
		claims.put("phone", user.getPhone());
		long time = System.currentTimeMillis();
		return Jwts.builder().setClaims(claims).setSubject(authentication.getName()).setIssuedAt(new Date(time))
				.setExpiration(new Date(time + EXPIRED)).signWith(SignatureAlgorithm.HS512, SECRET).compact();

	}

	public Authentication getAuthentication(String token) {
		Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
		Collection<? extends GrantedAuthority> authorities = Collections.emptyList();
		Users user = new Users();
		user.setUsername(claims.getSubject());
		user.setPassword("");
		user.setName(claims.get("name").toString());
		user.setEmail(claims.get("email").toString());
		user.setPhone(claims.get("phone").toString());
		return new UsernamePasswordAuthenticationToken(user, token, authorities);
	}

	public boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
