package io.jbqneto.nlw.esports.application.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.jbqneto.nlw.esports.application.database.entity.Ad;
import io.jbqneto.nlw.esports.application.database.entity.Game;
import io.jbqneto.nlw.esports.common.DateUtil;
import lombok.Data;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class PostAdDTO {

    @JsonProperty("game_id")
    private long gameId;

    private String name;
    @JsonProperty("years_playing")
    private long yearsPlaying;
    private String discord;
    @JsonProperty("week_days")
    private List<Integer> weekDays;
    @JsonProperty("hour_start")
    private String hourStart;
    @JsonProperty("hour_end")
    private String hourEnd;
    @JsonProperty("use_voice_channel")
    private boolean useVoiceChannel;

    public Ad toEntity() {
        var ad = new Ad();
        ad.setDiscord(this.discord);
        ad.setName(this.name);
        ad.setGame(new Game(this.gameId));
        ad.setHourEnd(DateUtil.timeTextToNumber(this.hourEnd));
        ad.setHourStart(DateUtil.timeTextToNumber(this.hourStart));
        ad.setUseVoiceChannel(this.useVoiceChannel);
        ad.setWeekDays(
                this.weekDays.stream()
                        .map(day -> day.toString())
                        .collect(Collectors.joining(","))
        );

        ad.setYearsPlaying(this.yearsPlaying);
        return ad;
    }

}
