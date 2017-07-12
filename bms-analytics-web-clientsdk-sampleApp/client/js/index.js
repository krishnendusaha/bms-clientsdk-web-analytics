require.config({
    'paths': {
        'BMSAnalytics': '../bms-clientsdk-web-analytics/bmsanalytics'
    }
});

require(['BMSAnalytics'], function(BMSAnalytics) {
    
    var applicationName = 'com.ibm.mfpstarterweb';
    var clientApiKey='c6a59891-e6eb-46ed-bfb4-6a499fa4daee'//'2bd5ad2a-ff2a-459c-bf0a-9d2ec90a538e';//'a0e83cc7-ffbc-4136-98e5-d2e2ff4f5223';//'e79ce52e-c3b1-4a23-a7f5-88f2a519d6e1';////'';
    var bmsregion=BMSAnalytics.Client.REGION_US_SOUTH; // BMSAnalytics.Client.REGION_UK (for Region United Kingdom)/ BMSAnalytics.Client.REGION_SYDNEY ( for Region Sydney)
    var deviceEvents=BMSAnalytics.DeviceEvents.ALL;  //BMSAnalytics.DeviceEvents.(NONE/ LIFECYCLE /NETWORK )
    var instanceId = '11f2157c-950a-479d-a063-d82581c8b1db';//'authorized'; //'2b171f44-6a32-4ad4-892c-c19f10fbf641';
    var hasUserContext=true; 

      var app = {
      //initialize app
      "init": function init() {
        var buttonElement = document.getElementById("ping_button");
        var buttonElement1 = document.getElementById("ping_button1");
        var buttonElement2 = document.getElementById("ping_button2");
        var buttonElement3 = document.getElementById("ping_button3");
        var buttonElement4 = document.getElementById("ping_button4");
        var buttonElement5 = document.getElementById("ping_button5");
        /*
        var customlogText = document.getElementById("logText");
        var buttonElement5 = document.getElementById("ping_button5");
        */
        
        buttonElement.style.display ="block";
        buttonElement1.style.display="block";
        buttonElement2.style.display ="block";
        buttonElement3.style.display="block";
        buttonElement4.style.display ="block";
        buttonElement5.style.display="block";
        
        // console.log('***'+BMSAnalytics.isEnabled());

        BMSAnalytics.enable();

        // console.log('***'+BMSAnalytics.isEnabled());

        //BMSAnalytics.disable();

        // console.log('***'+BMSAnalytics.isEnabled());

        // console.log ('getAppName '+ BMSAnalytics.getAppName());

        BMSAnalytics.log({'customLog3':'customValue3'});

        //  console.log('customLog sent');

        
        //console.log(BMSAnalytics.Logger.getMaxLogStoreSize());

        BMSAnalytics.Logger.setMaxLogStoreSize(10000);


        buttonElement.addEventListener('click', app.testServerConnection, false);

        buttonElement1.addEventListener('click',app.setUserContext,false);

        buttonElement2.addEventListener('click',app.disableLogs,false);

        buttonElement3.addEventListener('click',app.enableLogs,false);

        buttonElement4.addEventListener('click',app.sendLogs,false);

        buttonElement5.addEventListener('click',app.showLogLevel,false);

      },
      //test server connection
      "testServerConnection": function testServerConnection() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        titleText.innerHTML = "Hello Bluemix Mobile Analytics";
        statusText.innerHTML = "Connecting to Server...";
        infoText.innerHTML = "";
        console.log('testServerConnection');
        //BMSAnalytics.log({'customLog':'testServerConnection1'});
        BMSAnalytics.Logger.setLogLevel('trace');
        var promise=BMSAnalytics.send();

        promise.then(function(result) {
          statusText.innerHTML = "Analytics Data Sent...";
          console.log(result); // "Stuff worked!"
        }, function(err) {
          statusText.innerHTML = "Analytics Data Send Failed ";  
          console.log(err); // Error: "It broke"
        });
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 1000);          
      },

      "setUserContext": function setUserContext() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");

        titleText.innerHTML = "Hello Bluemix Mobile Analytics";
        infoText.innerHTML = "";
        BMSAnalytics.setUserIdentity('ksaha ibm'); 

        statusText.innerHTML = "User Identity Set...";
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 1000);          
      },

      "disableLogs": function disableLogs() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        //titleText.innerHTML = "Hello MobileFirst";
        statusText.innerHTML = "Logs disabled...";
        infoText.innerHTML = "";
        console.log('disableLogs');  
        BMSAnalytics.Logger.enable(false); 
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 1000);          
     
      },

      "enableLogs": function enableLogs() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        //titleText.innerHTML = "Hello MobileFirst";
        statusText.innerHTML = "Logs enabled...";
        infoText.innerHTML = "";
        console.log('enableLogs');  
        BMSAnalytics.Logger.enable(true);      
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 1000);          

      },

      "sendLogs": function sendLogs() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        //titleText.innerHTML = "Hello MobileFirst";
        statusText.innerHTML = "Logs sent...";
        infoText.innerHTML = "";

        console.log(BMSAnalytics.Logger.getMaxLogStoreSize());

        console.log('****'+BMSAnalytics.Logger.getLogLevel());

        //BMSAnalytics.Logger.setLogLevel('warn');  
        
        console.log('****'+BMSAnalytics.Logger.getLogLevel());

        console.log('warn');
         BMSAnalytics.Logger.warn({'customLog':'warn'});

        
        console.log('error');
        BMSAnalytics.Logger.error({'customLog':'error'});

        console.log('fatal');
         BMSAnalytics.Logger.fatal({'customLog':'fatal'});

         BMSAnalytics.Logger.send();
        console.log('--------'+BMSAnalytics.Logger.isStoringLogs());

        console.log('send Logs'); 
        BMSAnalytics.send();      

        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 1000);          
 
      },

      "showLogLevel": function showLogLevel() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        //titleText.innerHTML = "Hello MobileFirst";
        statusText.innerHTML = " Showing Logging Level";
        infoText.innerHTML = "Current log level set "+BMSAnalytics.Logger.getLogLevel();

        setTimeout(function(){
            statusText.innerHTML = "";
            infoText.innerHTML= "";             
        }, 1000);

        console.log('****'+BMSAnalytics.Logger.getLogLevel());

      }

    }
        console.log('>>>'+bmsregion);
        BMSAnalytics.Client.initialize(bmsregion);
        //BMSAnalytics.overrideServerhost("localhost:8000");
        BMSAnalytics.initialize(applicationName,clientApiKey,hasUserContext,deviceEvents,instanceId);//.done(function(){
        console.log('Bluemix Mobile Analytics initialized');
        BMSAnalytics.Logger.setLogLevel('error');
        console.log('app.init '+BMSAnalytics.Logger.getLogLevel());

        app.init();
             
        // });
      
   


});



