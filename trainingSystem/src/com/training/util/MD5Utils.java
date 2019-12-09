package com.training.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * 拓薪教育：樱木老师
 * 腾讯课堂搜索：拓薪教育
 * 腾讯课堂直播间地址：https://ke.qq.com/course/149432
 * 加入QQ群领取免费资料和视频：QQ群号 344379612
 *
 * MD5加密的工具类
 */
public class MD5Utils {

	/**
	 * 使用md5的算法进行加密
	 */
	public static String encrypt(String content) {
		byte[] secretBytes = null;
		try {
			secretBytes = MessageDigest.getInstance("md5").digest(content.getBytes());
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException("没有md5这个算法！");
		}
		String md5code = new BigInteger(1, secretBytes).toString(16);// 16进制数字
		// 如果生成数字未满32位，需要前面补0
		for (int i = 0; i < 32 - md5code.length(); i++) {
			md5code = "0" + md5code;
		}
		return md5code;
	}

	public static void main(String[] args) {
		System.out.println(encrypt("admin"));
	}

}
