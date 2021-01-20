package com.paymentsystem.paymentsystem.Order.jpa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal price;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderNumber;
}
