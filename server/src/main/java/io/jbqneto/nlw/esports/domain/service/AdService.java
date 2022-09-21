package io.jbqneto.nlw.esports.domain.service;

import io.jbqneto.nlw.esports.application.database.entity.Ad;
import io.jbqneto.nlw.esports.application.database.repository.AdRepository;
import io.jbqneto.nlw.esports.application.database.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AdService {

    private final AdRepository repository;
    private final GameRepository gameRepository;

    public List<Ad> findAdsByGameId(Long gameId) {

        return repository.findAllByGameId(gameId);
    }

    public Optional<Ad> findById(Long adId) {
        return this.repository.findById(adId);
    }

    public Ad saveAd(Ad ad) {
        var game = gameRepository.findById(ad.getGame().getId())
                        .orElseThrow(() -> new RuntimeException("Game not found:" + ad.getGame().getId()));

        ad.setGame(game);

        return this.repository.save(ad);
    }
}
