package com.codeacademy.backend.controller.DTO;

import com.codeacademy.backend.entity.User.Role;
import com.codeacademy.backend.entity.User.User;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
public class UserDTO {

    private Long id;
    private String username;
    private String name;
    private String surname;
    private Set<String> roles;

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.roles = user.getRoles().stream()
                .map(Role::getRoleName)
                .collect(Collectors.toSet());
    }
}
