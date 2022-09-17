package io.jbqneto.nlw.esports.application.database.repository;

import io.jbqneto.nlw.esports.application.database.entity.Ad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdRepository extends JpaRepository<Ad, Long> {

    List<Ad> findAllByGameId(long gameId);
}
