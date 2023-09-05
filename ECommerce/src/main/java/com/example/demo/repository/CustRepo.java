package com.example.demo.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.example.demo.model.CustModel;

//import jakarta.transaction.Transactional;

@Repository//represents repository
public interface CustRepo extends JpaRepository<CustModel, Integer>{
	
//	@Query(value="select *CustomerDetails from  where id=:id or name=:name",nativeQuery=true)
//	public List<CustModel> getInfo(@Param("id") int id,@Param("name") String name);
//	
//	@Modifying
//	@Transactional
//	@Query(value="delete from Book where id=:s",nativeQuery=true)
//	public int deleteInfo(@Param("s")int id);
//	
//	@Modifying
//	@Transactional
//	@Query(value = "UPDATE Book SET id = ?1 WHERE id = ?2", nativeQuery = true)
//	public int updateInfo(int newid, int oldid);

}