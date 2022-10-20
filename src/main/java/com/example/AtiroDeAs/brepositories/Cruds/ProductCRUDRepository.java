package com.example.AtiroDeAs.brepositories.Cruds;

import com.example.AtiroDeAs.amodels.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductCRUDRepository extends MongoRepository <Product, String> {
}
