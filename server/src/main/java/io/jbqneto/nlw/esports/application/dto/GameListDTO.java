package io.jbqneto.nlw.esports.application.dto;

import io.jbqneto.nlw.esports.application.database.entity.Game;
import lombok.Getter;

@Getter
public class GameListDTO {
    private final long id;
    private final String title;
    private final String bannerUrl;
    private final long ads;

    public GameListDTO(Game game) {
        this.id = game.getId();
        this.title = game.getTitle();
        this.bannerUrl = game.getBannerUrl();
        this.ads = game.getAds();
    }

}
