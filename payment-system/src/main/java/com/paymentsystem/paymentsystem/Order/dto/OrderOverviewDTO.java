package com.paymentsystem.paymentsystem.Order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@AllArgsConstructor
@Getter
@Setter
public class OrderOverviewDTO {

    private long ordersTotalCount;

    private Instant createdAt = Instant.now();

    private BigDecimal ordersTotalPrice;
}
