package io.jbqneto.nlw.esports.application.controller;

import io.jbqneto.nlw.esports.application.dto.GameAdDTO;
import io.jbqneto.nlw.esports.application.dto.GameListDTO;
import io.jbqneto.nlw.esports.domain.service.AdService;
import io.jbqneto.nlw.esports.domain.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("games")
public class GameController {

    private final GameService service;
    private final AdService adService;

    @GetMapping(value = "/{id}/ads")
    public ResponseEntity<List<GameAdDTO>> getGameAds(@PathVariable Long id) {
        var ads = adService.findAdsByGameId(id)
                .stream().map(GameAdDTO::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok(ads);
    }

    @GetMapping
    public ResponseEntity<List<GameListDTO>> listGames() {
        var games = this.service.listGames().stream()
                .map(game -> new GameListDTO(game))
                .collect(Collectors.toList());

        return ResponseEntity.ok(games);
    }
}
