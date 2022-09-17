package io.jbqneto.nlw.esports.application.database.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "ads")
public class Ad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private Game game;

    private String name;

    private long yearsPlaying;
    private String discord;
    private String weekDays;
    private long hourStart;
    private long hourEnd;
    private boolean useVoiceChannel;

    @CreatedDate
    private LocalDateTime createdAt = LocalDateTime.now();

}
