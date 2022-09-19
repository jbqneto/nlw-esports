package io.jbqneto.nlw.esports.common;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class DateUtilTest {

    @Test
    void mustTransformTimeTextToNumber() {
        String textTime = "1";

        var numberTime = DateUtil.timeTextToNumber(textTime);

        Assertions.assertTrue(numberTime == 60);
    }

    @Test
    void mustTransformPartialTimeTextToNumber() {
        String textTime = "10:30";
        long expected = (10 * 60) + 30;

        var numberTime = DateUtil.timeTextToNumber(textTime);

        Assertions.assertEquals(expected, numberTime);
    }

    @Test
    void mustTransformTimeNumberToText() {
        long numberTime = 60;

        var textTime = DateUtil.timeNumberToText(numberTime);

        Assertions.assertEquals("01:00", textTime);
    }

}