package com.example.AtiroDeAs.dcontrollers;

import com.example.AtiroDeAs.amodels.Product;
import com.example.AtiroDeAs.cservices.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ATDA/api/v1/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @CrossOrigin(origins = "*")
    @GetMapping("/obtainEvery")
    public List<Product> getAll(){
        return productService.getAll();
    }

    @GetMapping("/obtainOne/{id}")
    public Optional<Product> getOne(@PathVariable("id") String id){
        return productService.getOneProduct(id);
    }

    @PostMapping("/save")
    public Product save (@RequestBody Product product){
        return productService.save(product);
    }

    @PutMapping("/update")
    public Product overwrite(@RequestBody Product product){
        return productService.update(product);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") String id){
        productService.delete(id);
    }
}
