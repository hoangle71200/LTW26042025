package com.fis.thuctap.myRepo.member;

import com.fis.thuctap.entity.product.Product;
import com.fis.thuctap.entity.product.ProductGroup;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface IProductRepo extends JpaRepository<Product, Integer> {
//    public Product findById(int id);
    public Optional<Product> findByName(String name);
    public List<Product> findByNameContaining(String name);
//    @Query(value = "SELECT * FROM hoanglh_product_group " +
//            "where product_group_id = :id",  nativeQuery = true)
//    Optional<List<Product>> findByProductGroupId(@Param("id") Integer id);
    Optional<List<Product>> findProductsByProductGroupId(Integer productGroupId);
    Optional<List<Product>> findProductsByProductDepartmentId(Integer productDepartmentId);
//    @Transactional(readOnly = true) // Không cần @Modifying cho SELECT
//    @Query(value = "SELECT * " +
//            "FROM hoanglh_product " +
//            "WHERE time_created BETWEEN TO_DATE(:before, 'YYYY-MM-DD') AND TO_DATE(:after, 'YYYY-MM-DD') "
////            "AND (is_qualified = :isQualified OR :isQualified IS NULL) " +
////            "AND (nmmst like %:nmmst% OR :nmmst IS NULL OR :nmmst = '') "
//            , nativeQuery = true)
//    Optional<Page<Product>> findProductsBy(
//            @Param("before") String before,
//            @Param("after") String after,
//            Pageable pageable);
@Transactional(readOnly = true) // Không cần @Modifying cho SELECT
@Query(value = "SELECT * " +
        "FROM hoang_lh_product " +
        "WHERE time_created BETWEEN TO_DATE(:before, 'YYYY-MM-DD') AND TO_DATE(:after, 'YYYY-MM-DD')"
        , nativeQuery = true)
    Optional<Page<Product>> findProductsByTimeCreated(String before, String after, Pageable pageable);
    @Transactional(readOnly = true) // Không cần @Modifying cho SELECT
    @Query(value = "SELECT * " +
            "FROM hoang_lh_product " +
            "WHERE (time_created BETWEEN TO_DATE(:before, 'YYYY-MM-DD') AND TO_DATE(:after, 'YYYY-MM-DD') " +
            "OR :before IS NULL OR :after IS NULL) " +
            "AND (product_group_id = :productGroup OR :productGroup IS NULL) " +
            "AND (sell_type_id = :sellType OR :sellType IS NULL) "
            , nativeQuery = true)
    Optional<Page<Product>> findProductsByTimeCreatedAndProductInfor(String productGroup,
                                                                     String sellType,
                                                                     String before,
                                                                     String after, Pageable pageable);

}
