package com.example.demo.repository;

import com.example.demo.model.CrSalle;
import com.example.demo.model.Salle;
import com.example.demo.model.SalleCrenauKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;

@Component
public interface CrSalleRepository extends JpaRepository<CrSalle, SalleCrenauKey> {

    CrSalle findById(long idd);
    @Modifying
    @Transactional
    @Query (value="	UPDATE cr_salle  SET date = :crSalle.date , crenaux =:crSalle.crenaux WHERE salle =:crSalle.salle ",nativeQuery=true)
    void update(CrSalle crSalle);
    
}
