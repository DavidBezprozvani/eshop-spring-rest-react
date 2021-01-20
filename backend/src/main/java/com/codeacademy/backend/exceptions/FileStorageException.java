package com.codeacademy.backend.exceptions;

public class FileStorageException extends RuntimeException{
    public FileStorageException(String message) {
        super(message);
    }
}