package com.codeacademy.backend.exceptions;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(Long id) {
        super("Entry with id: " + id + " was not found!");
    }
}