package com.codeacademy.backend.Repository;

import com.codeacademy.backend.Entity.UploadedFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UploadedFileRepository extends JpaRepository<UploadedFile, Long> {
    Optional<UploadedFile> getByName(String name);
}
