package com.training.util;

import java.io.IOException;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;


import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;


public class DateJsonDeserialize extends JsonDeserializer<Date> {
	    @Override
	    public Date deserialize(JsonParser p, DeserializationContext ctx) throws IOException {
	        String text = p.getText();
	        if("".equals(text)&&text==null){
	            return null;
	        }
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	        Date date = null;
	        try {
	            date = new Date(sdf.parse(text).getTime());
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }
	        return date;
	    }
	}