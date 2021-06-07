package com.pabitero.merchsite.repository;

import com.pabitero.merchsite.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByFirstName(String name);
}
