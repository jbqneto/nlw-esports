package io.jbqneto.nlw.esports.application.controller;

import io.jbqneto.nlw.esports.application.database.entity.Ad;
import io.jbqneto.nlw.esports.application.dto.PostAdDTO;
import io.jbqneto.nlw.esports.domain.service.AdService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("ads")
public class AdController {

    private final AdService service;

    @PostMapping
    public Ad addGameAd(@RequestBody PostAdDTO ad) {
        return this.service.saveAd(ad.toEntity());
    }
}
