package com.training.util;

import java.io.IOException;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class DateJsonSerialize extends JsonSerializer<Object> {

	    @Override
	    public void serialize(Object value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
	        if(value != null){
	            if(value.getClass().isAssignableFrom(Timestamp.class)){
	                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	                String format = sdf.format((Timestamp) value);
	                gen.writeString(format);
	            }
	        }
	    }

	}
