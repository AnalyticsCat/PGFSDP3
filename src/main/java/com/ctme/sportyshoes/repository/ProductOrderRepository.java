package com.ctme.sportyshoes.repository;

import com.ctme.sportyshoes.domain.ProductOrder;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ProductOrder entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long> {}
