package io.jbqneto.nlw.esports.application.database.repository;

import io.jbqneto.nlw.esports.application.database.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
