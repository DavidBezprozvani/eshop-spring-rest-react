package com.codeacademy.backend.Repository;

import com.codeacademy.backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
