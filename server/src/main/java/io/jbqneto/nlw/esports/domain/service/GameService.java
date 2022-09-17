package io.jbqneto.nlw.esports.domain.service;

import io.jbqneto.nlw.esports.application.database.entity.Game;
import io.jbqneto.nlw.esports.application.database.repository.AdRepository;
import io.jbqneto.nlw.esports.application.database.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class GameService {

    private final GameRepository repository;
    private final AdRepository adRepository;

    public List<Game> listGames() {
        //TODO: Refactor this latter (maybe)
        var ads = this.adRepository.findAll();

        return this.repository.findAll().stream()
                .map(game -> {
                    game.setAds(
                            ads.stream()
                                    .filter(ad -> ad.getGame().getId().equals(game.getId()))
                            .count()
                    );

                    return game;
                }).collect(Collectors.toList());
    }
}
