package com.codeacademy.backend.security;

import com.codeacademy.backend.controller.DTO.UserDTO;
import com.codeacademy.backend.entity.User.User;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

import static com.codeacademy.backend.security.SecurityConstants.*;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private JwtProvider jwtProvider;
    private ObjectMapper objectMapper;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, JwtProvider jwtProvider,
                                   ObjectMapper objectMapper) {
        super(authenticationManager);
        this.jwtProvider = jwtProvider;
        this.objectMapper = objectMapper;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        try {
            Map<String, String> credentials = new ObjectMapper().readValue(request.getReader(), new TypeReference<>() {
            });

            String username = credentials.get(USERNAME_FIELD);
            String password = credentials.get(PASSWORD_FIELD);

            return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (Exception e) {
            throw new BadCredentialsException("Provided structure was incorrect.");
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        User user = (User) authResult.getPrincipal();

        String jwtToken = jwtProvider.createToken(user);

        response.addHeader(AUTHORIZATION_HEADER, AUTHORIZATION_HEADER_PREFIX + jwtToken);

        UserDTO userDTO = new UserDTO(user);

        objectMapper.writeValue(response.getWriter(), userDTO);

    }
}
