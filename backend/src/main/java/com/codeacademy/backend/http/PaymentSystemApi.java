package com.codeacademy.backend.http;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.HashMap;

@Component
public class PaymentSystemApi {

    private RestTemplate restTemplate;


    public PaymentSystemApi(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void createOrder(@NotNull BigDecimal price) {


        HashMap<String, Object> params = new HashMap<>();
        params.put("price", price);

        restTemplate.postForObject("/order", params, Void.class);
    }
}
