package io.jbqneto.nlw.esports.common;

public class StringUtil {

    public static String padStart(String baseText, int expectedSize, String fill) {
        int size = baseText.length();
        StringBuilder finalText = new StringBuilder();

        for (int i = size; i < expectedSize; i++) {
            finalText.append(fill);
        }

        finalText.append(baseText);

        return finalText.toString();
    }
}
