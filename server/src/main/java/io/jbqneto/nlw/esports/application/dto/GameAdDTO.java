package io.jbqneto.nlw.esports.application.dto;

import io.jbqneto.nlw.esports.application.database.entity.Ad;
import io.jbqneto.nlw.esports.common.DateUtil;
import lombok.Getter;

import java.util.Optional;

@Getter
public class GameAdDTO {
    private final long id;
    private final String name;
    private final long yearsPlaying;
    private final String hourStart;
    private final String hourEnd;
    private final boolean useVoiceChannel;
    private final String[] weekDays;

    public GameAdDTO(Ad ad) {
        this.id = ad.getId();
        this.name = ad.getName();
        this.yearsPlaying = ad.getYearsPlaying();
        this.hourStart = DateUtil.timeNumberToText(ad.getHourStart());
        this.hourEnd = DateUtil.timeNumberToText(ad.getHourEnd());
        this.useVoiceChannel = ad.isUseVoiceChannel();
        this.weekDays = Optional.ofNullable(ad.getWeekDays())
                .orElse("").split(",");
    }
}
