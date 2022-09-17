package io.jbqneto.nlw.esports.domain.service;

import io.jbqneto.nlw.esports.application.database.entity.Ad;
import io.jbqneto.nlw.esports.application.database.repository.AdRepository;
import io.jbqneto.nlw.esports.application.database.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AdService {

    private final AdRepository repository;
    private final GameRepository gameRepository;

    public List<Ad> getGameAds(long gameId) {

        return repository.findAllByGameId(gameId);
    }

    public Ad saveAd(Ad ad) {
        var game = gameRepository.findById(ad.getGame().getId())
                        .orElseThrow(() -> new RuntimeException("Game not found:" + ad.getGame().getId()));

        ad.setGame(game);

        return this.repository.save(ad);
    }
}
