package com.fis.thuctap.utils;

public class Constant {

	public interface CellType {
		public static final String STRING = "STRING";
		public static final String NUMBER = "NUMBER";
		public static final String BOOLEAN = "BOOLEAN";
		public static final String DATE = "DATE";
		public static final String DATE_TIME = "DATE_TIME";
		public static final String TIME = "TIME";
	}

	public interface CellError {
		public static final String TYPE_ERROR = "TYPE_ERROR";
		public static final String VALUE_ERROR = "VALUE_ERROR";
		public static final String REQUIRED_ERROR = "REQUIRED_ERROR";
		public static final String MAXLENGTH_ERROR = "MAXLENGTH_ERROR";
		public static final String MINLENGTH_ERROR = "MINLENGTH_ERROR";
		public static final String PATTERN_ERROR = "PATTERN_ERROR";
		public static final String TEPM_ERROR = "TEPM_ERROR";
	}

	public interface CellCharacter {
		public static final String LARGER = ">";
		public static final String LESS = "<";
		public static final String COMMA = ",";
		public static final String PARENTHESIS_L = "(";
		public static final String PARENTHESIS_R = ")";
		public static final String SEMICOLON = ";";
		public static final String SINGLE_QUOTATION_MARK = "'";
	}

	public interface TextAlign {
		public static final String LEFT = "L";
		public static final String RIGHT = "R";
		public static final String CENTER = "C";
	}


}
