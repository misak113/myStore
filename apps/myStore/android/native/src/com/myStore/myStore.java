package com.myStore;

import org.apache.cordova.CordovaWebView;

import android.os.Bundle;

import com.worklight.androidgap.WLDroidGap;

public class myStore extends WLDroidGap {
	
	@Override
	public void onCreate(Bundle savedInstanceState){
		super.onCreate(savedInstanceState);
	}
	
	/**
     * onWLInitCompleted is called when the Worklight runtime framework initialization is complete
     */
	@Override
	public void onWLInitCompleted(Bundle savedInstanceState){
		super.loadUrl(getWebMainFilePath());
		// Add custom initialization code after this line
		//super.setIntegerProperty("loadUrlTimeoutValue", 60000);
	}
	
	/**
	 * Override this method if you are using worklight 6.x
	 */
	@Override
	protected void bindBrowser(CordovaWebView appView, boolean clearCache) {

	    super.bindBrowser(appView, clearCache);

	    // attach web view to debugging service
	    //DebugServiceClient.attachWebView(appView, this);
	}
	
}



