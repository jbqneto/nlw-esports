package io.jbqneto.nlw.esports.common;

import static io.jbqneto.nlw.esports.common.StringUtil.padStart;

public class DateUtil {

    public static long timeTextToNumber(String time) {
        String[] splited = time.split(":");
        long minutes = Integer.parseInt(splited[0]) * 60;

        if (splited.length > 1) {
            minutes += Integer.parseInt(splited[1]);
        }

        return minutes;
    }

    public static String timeNumberToText(long totalMinutes) {
        var hours = "" + Math.round(Math.floor(totalMinutes / 60));
        var minutes = "" + totalMinutes % 60;

        return padStart(hours, 2, "0") + ":" + padStart(minutes, 2, "0");
    }
}
