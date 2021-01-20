package com.codeacademy.backend.exceptions;

public class FileNotFoundException extends RuntimeException {

        public FileNotFoundException(String message) {
            super(message);
    }
}
