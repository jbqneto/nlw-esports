package io.jbqneto.nlw.esports.application.controller;

import io.jbqneto.nlw.esports.application.database.entity.Ad;
import io.jbqneto.nlw.esports.application.dto.PostAdDTO;
import io.jbqneto.nlw.esports.domain.service.AdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("ads")
public class AdController {

    private final AdService service;

    @PostMapping
    public ResponseEntity<Ad> addGameAd(@RequestBody PostAdDTO ad) {
        return new ResponseEntity<>(this.service.saveAd(ad.toEntity()), HttpStatus.CREATED);
    }

    @GetMapping("/{adId}/discord")
    public ResponseEntity<String> getGameAdDiscord(@PathVariable Long adId) {
        var ad = this.service.findById(adId)
                .orElseThrow(() -> new IllegalArgumentException("AD not found: " + adId));

        return ResponseEntity.ok(ad.getDiscord());
    }
}
