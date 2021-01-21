package com.codeacademy.backend.security;

import org.springframework.security.core.userdetails.User;

public class JwtProvider {

    public String createToken(User user) {
        return "this.is.myToken";

    }
}
