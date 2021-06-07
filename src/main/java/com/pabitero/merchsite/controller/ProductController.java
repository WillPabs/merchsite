package com.pabitero.merchsite.controller;

import com.pabitero.merchsite.entity.Product;
import com.pabitero.merchsite.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping()
    public List<Product> findAllProducts(@RequestParam(value = "page", defaultValue = "1") int page,
                                         @RequestParam(value = "limit", defaultValue = "10") int limit,
                                         @RequestParam(value = "sort", defaultValue = "desc", required = false) String sort)  {
        return service.getProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable int id) {
        Optional<Product> product = Optional.ofNullable(service.getProductById(id));
        return product.map(response -> ResponseEntity.ok().body(response))
                        .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/{name}")
    public Product findProductByName(@PathVariable String name) {
        return service.getProductByName(name);
    }

    @PostMapping()
    public ResponseEntity<Product> addProduct(@RequestBody Product product) throws URISyntaxException {
        Product result = service.saveProduct(product);
        return ResponseEntity.created(new URI("/products" + result.getId())).body(result);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable("id") int id) {
        Product isExists = service.getProductById(id);
        if(isExists == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else if(product == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        service.updateProduct(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        return service.deleteProduct(id);
    }
}
