package com.retailanalytics;

import java.util.List;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.net.wifi.ScanResult;
import android.net.wifi.WifiManager;

public class WifiApPlugin extends CordovaPlugin {
	
	WifiManager wifiManager;
	
	@Override
	public boolean execute(String action, JSONArray arguments, CallbackContext callbackContext) throws JSONException {
		this.
		wifiManager = (WifiManager) this.cordova.getActivity().getSystemService(Context.WIFI_SERVICE);
        if (wifiManager.isWifiEnabled() == false) {
            wifiManager.setWifiEnabled(true);
        }
		
		if (action.equals("getApList")) {
			JSONArray apList = new JSONArray();
			List<ScanResult> results = wifiManager.getScanResults();
			System.out.print(results);
			System.out.print(results.size());
			System.out.print(results.get(0));
			for (ScanResult result: results) {
				JSONObject ap = new JSONObject();
				ap.put("signal_strength", result.level);
				ap.put("ssid", result.SSID);
				ap.put("mac", result.BSSID);
				apList.put(ap);
			}
			callbackContext.success(apList);
			return true;
		}
		
		return false;
	}
	
}
