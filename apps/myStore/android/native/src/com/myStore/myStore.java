package com.myStore;

import org.apache.cordova.CordovaWebView;

import android.os.Bundle;

import com.worklight.androidgap.WLDroidGap;

public class myStore extends WLDroidGap {
	
	@Override
	public void onCreate(Bundle savedInstanceState){
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("loadUrlTimeoutValue", 20000);
	}
	
	/**
     * onWLInitCompleted is called when the Worklight runtime framework initialization is complete
     */
	@Override
	public void onWLInitCompleted(Bundle savedInstanceState){
		super.loadUrl(getWebMainFilePath());
	}
		
}



