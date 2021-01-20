package com.paymentsystem.paymentsystem.Order.jpa;

import com.paymentsystem.paymentsystem.Order.dto.OrderOverviewDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o.orderNumber FROM Order o ORDER BY o.id DESC")
    long getLastNumber();

    @Query("SELECT new com.paymentsystem.paymentsystem.Order.dto(count(o), sum(o.price)) FROM Order o")
    OrderOverviewDTO getOrderOverview();
}
