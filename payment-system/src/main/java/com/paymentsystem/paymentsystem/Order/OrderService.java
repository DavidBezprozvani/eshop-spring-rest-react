package com.paymentsystem.paymentsystem.Order;
import com.paymentsystem.paymentsystem.Order.dto.OrderOverviewDTO;
import com.paymentsystem.paymentsystem.Order.jpa.Order;
import com.paymentsystem.paymentsystem.Order.jpa.OrderRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;


@Service
public class OrderService {

    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }


    public void addOrder(BigDecimal price) {
        Order order = new Order();
        order.setPrice(price);
        order.setOrderNumber(getNextNumber());
        orderRepository.save(order);
    }

    private long getNextNumber() {
        if(orderRepository.findAll().size() == 0) {
            return 1;
        }
        return orderRepository.getLastNumber() + 1;
    }

    public OrderOverviewDTO getOverview() {
        return orderRepository.getOrderOverview();
    }


}
