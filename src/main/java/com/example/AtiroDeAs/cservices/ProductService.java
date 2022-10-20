package com.example.AtiroDeAs.cservices;

import com.example.AtiroDeAs.amodels.Product;
import com.example.AtiroDeAs.brepositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll(){
        return productRepository.getAll();
    }

    public Optional<Product> getOneProduct(String id){
        return productRepository.getOneProduct(id);
    }

    public Product save(Product product){
        return productRepository.save(product);
    }

    public void delete(String id){
        productRepository.delete(id);
        /*Boolean product_temp = getOneProduct(id).map(product -> {productRepository.delete(product);
        return true;
        }).orElse(false);
        return product_temp;*/
    }

    public Product update(Product product){
        if(productRepository.existsById(product.getId())){
            return productRepository.save(product);
        }else {
            //Alert o algo
            return null;
        }
    }
}
