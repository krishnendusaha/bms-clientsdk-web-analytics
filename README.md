# bms-clientsdk-web-analytics
  Bluemix Mobile Analytics Service web SDK helps web app to connect to the IBM® Mobile Analytics for Bluemix® platform .Learn how to integrate the  Web SDK in a web application [here](https://console.ng.bluemix.net/docs/services/mobileanalytics/index.html#getting-started-with-mobile-analytics)


* By default  the analytics data capture is enabled, meaning data is passed to your Bluemix Analytics service instance. You can explicitly enable or disable persistent data capture by calling `BMSAnalytics.enable()` or `BMSAnalytics.disable()`.
 
  Note: The data collected via the analytics API and sent to the IBM Bluemix Mobile Analytics server, is then available in the UI DashBoard .

* The IBM Bluemix Mobile Analytics  API bmsanalytics provides the ability to enable, disable, and log custom events to analytics and send it to the server.
 
* The IBM Bluemix Mobile Analytics bmsanalytics was coded using the UMD pattern for javascript. This means it can be used as a separate module or used under the global context.  
  
* Following are examples of integrating the IBM Bluemix Mobile Analytics bmsanalytics as a module, using 'define', and an example of integrating the IBM Bluemix Mobile Analytics bmsanalytics on the global context.
  
  Example usage as module, using 'define':
  -----------------------------------
  
  Using module loader requirejs 

  ```Javascript
  require.config({
    'paths': {
        'bmsanalytics': '../bms-web-sdk/bmsanalytics'
      }
  });

  require(['bmsanalytics'], function(BMSAnalytics) {
     BMSAnalytics.send();
  }
  ```
  
  Example usage on global context:
  -----------------------------------
  ```Html
  <script src="bmsanalytics.js"></script>
  <script>
    BMSAnalytics.send();
  </script>
  ```
