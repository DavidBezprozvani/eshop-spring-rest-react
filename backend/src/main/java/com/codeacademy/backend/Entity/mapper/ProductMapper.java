package com.codeacademy.backend.entity.mapper;

import com.codeacademy.backend.entity.Product;
import com.codeacademy.backend.entity.ProductDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public ProductDTO convertProductToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setName(product.getName());
        productDTO.setDescription(product.getDescription());
        productDTO.setInStock(product.getInStock());
        productDTO.setPrice(product.getPrice());
//        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }

    public Product convertProductDtoToEntity(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        return product;
    }
}
