package com.nttdata.binarynativeclient;

import android.util.Log;

public class BinaryNativeClient {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
