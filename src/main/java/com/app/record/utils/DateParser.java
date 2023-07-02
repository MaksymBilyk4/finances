package com.app.record.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateParser {

    public String parseDateToString(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy EEEE");
        return dateFormat.format(date);
    }

    public Date parseStringToDate(String dateStr) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");

        try {
            return dateFormat.parse(dateStr);
        } catch (ParseException ex) {
            ex.printStackTrace();
        }

        return null;
    }
}