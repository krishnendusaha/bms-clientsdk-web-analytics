require.config({
    'paths': {
        'BMSAnalytics': '../bms-clientsdk-web-analytics/bmsanalytics'
    }
});

require(['BMSAnalytics'], function(BMSAnalytics) {
    
    var applicationName = 'com.ibm.mfpstarterweb';
    var clientApiKey='2b2d1670-d0a6-4184-a1ee-725ac36f42cd';//'2c11943d-5626-4807-b8b0-8a6a7562b983';//'2bd5ad2a-ff2a-459c-bf0a-9d2ec90a538e';//'a0e83cc7-ffbc-4136-98e5-d2e2ff4f5223';//'e79ce52e-c3b1-4a23-a7f5-88f2a519d6e1';////'';
    var bmsregion=BMSAnalytics.Client.REGION_US_SOUTH; // REGION_UK (for Region United Kingdom)/ REGION_SYDNEY ( for Region Sydney)
    var deviceEvents=BMSAnalytics.DeviceEvents.ALL;  //BMSAnalytics.DeviceEvents.(NONE/ LIFECYCLE /NETWORK )
    var instanceId = '2d1b6d06-d47d-4d87-9806-1bd52fb46e73';//'d6e6677c-3456-489b-9a0d-b295fb54c03a';//'authorized'; //'2b171f44-6a32-4ad4-892c-c19f10fbf641';
    var hasUserContext=true; 


    BMSAnalytics.Client.initialize(bmsregion);
        //BMSAnalytics.overrideServerhost("localhost:8000");
    BMSAnalytics.initialize(applicationName,clientApiKey,hasUserContext,deviceEvents,instanceId);//.done(function(){
    console.log('Bluemix Mobile Analytics initialized');
        
       
      var app = {
      //initialize app
      "init": function init() {
        var buttonElement0 = document.getElementById("ping");
        var textElement0 = document.getElementById("userIdentity");
        var buttonElement1 = document.getElementById("setUsrContext");

        var buttonElement2 = document.getElementById("disableLogger");
        var buttonElement3 = document.getElementById("enableLogger");
        var buttonElement4 = document.getElementById("isEnabled");

        var buttonElement5 = document.getElementById("getLogLevel");
        var textElement1 = document.getElementById("loglevelset");
        var buttonElement6 = document.getElementById("setLogLevel");

        var textElement2 = document.getElementById("logText");
        var textElement3 = document.getElementById("logTextLevel");
        var buttonElement7 = document.getElementById("sendLog");

        var buttonElement8 = document.getElementById("enableAnalytics");
        var buttonElement9 = document.getElementById("disableAnalytics");
        var buttonElement10 = document.getElementById("sendAnalytics");

        var textElement4 = document.getElementById("analyticscustomlog");
        var buttonElement11 = document.getElementById("customLogAnalytics");

        var buttonElement12 = document.getElementById("getlogStoreSize");
        var textElement5 = document.getElementById("logStoreSize");
        var buttonElement13 = document.getElementById("setlogStoreSize");

        buttonElement0.style.display ="block";
        buttonElement1.style.display="block";
        buttonElement2.style.display ="block";
        buttonElement3.style.display="block";
        buttonElement4.style.display ="block";
        buttonElement5.style.display="block";
        buttonElement6.style.display ="block";
        buttonElement7.style.display="block";
        buttonElement8.style.display ="block";
        buttonElement9.style.display="block";
        buttonElement10.style.display ="block";
        buttonElement11.style.display="block";
        buttonElement12.style.display ="block";
        buttonElement13.style.display="block";
        
        BMSAnalytics.send();
        BMSAnalytics.enable();

        
        BMSAnalytics.Logger.setMaxLogStoreSize(10000);


        buttonElement0.addEventListener('click', app.testServerConnection, false);

        buttonElement1.addEventListener('click',app.setUserContext,false);

        buttonElement2.addEventListener('click',app.disableLogger,false);

        buttonElement3.addEventListener('click',app.enableLogger,false);

        buttonElement4.addEventListener('click',app.isEnabled,false);

        buttonElement5.addEventListener('click',app.getLogLevel,false);

        buttonElement6.addEventListener('click',app.setLogLevel,false);

        buttonElement7.addEventListener('click',app.sendLog,false);

        buttonElement8.addEventListener('click',app.enableAnalytics,false);

        buttonElement9.addEventListener('click',app.disableAnalytics,false);

        buttonElement10.addEventListener('click',app.sendAnalytics,false);

        buttonElement11.addEventListener('click',app.customLogAnalytics,false);

        buttonElement12.addEventListener('click',app.getlogStoreSize,false);

        buttonElement13.addEventListener('click',app.setlogStoreSize,false);


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
        BMSAnalytics.log({'customLog':'testServerConnection1'});
        var promise=BMSAnalytics.send();

        promise.then(function(result) {
          statusText.innerHTML = "Connection Successful...";
          console.log(result); // "Stuff worked!"
        }, function(err) {
          statusText.innerHTML = "Connection Failed ....";  
          console.log(err); // Error: "It broke"
        });
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          
      },

      "setUserContext": function setUserContext() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");

        titleText.innerHTML = "Hello Bluemix Mobile Analytics";
        infoText.innerHTML = "";
        BMSAnalytics.setUserIdentity(document.getElementById("userIdentity").value); 
        BMSAnalytics.send();
        statusText.innerHTML = "User Identity Set..with userId "+document.getElementById("userIdentity").value;
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          
      },

      "disableLogger": function disableLogger() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Log Capturing is disabled...";
        infoText.innerHTML = "";
        console.log('disableLogger');  
        BMSAnalytics.Logger.capture(false); 
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          
     
      },

      "enableLogger": function enableLogger() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        statusText.innerHTML = "Logs Capturing is enabled...";
        infoText.innerHTML = "";
        console.log('enableLogger');  
        BMSAnalytics.Logger.capture(true);      
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          

      },


      "isEnabled":function isEnabled() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        statusText.innerHTML = "Check if Log Capturing enabled... ";
        infoText.innerHTML = "";


        if(BMSAnalytics.Logger.isStoringLogs() )
        {
           //setTimeout(function(){
            statusText.innerHTML = "Log Capturing is enabled... ";
            //}, 2000);          
        }
        else 
        {
            //setTimeout(function(){
            statusText.innerHTML = "Log Capturing is disabled... ";
            //}, 2000);
        }

        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          


      },

      "getLogLevel":function()  {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Current Logging Level "+BMSAnalytics.Logger.getLogLevel();
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          
        

      },

      "setLogLevel":function() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        var ll=document.getElementById("loglevelset").value;
        
        if(ll=="TRACE" || ll=="trace")
        {
           BMSAnalytics.Logger.setLogLevel('trace');
        }
        else if(ll=="DEBUG" || ll=="debug")
        {
            BMSAnalytics.Logger.setLogLevel('debug');
        }
        else if(ll=="INFO" || ll=="info")
        {
            BMSAnalytics.Logger.setLogLevel('info');
        }
        else if(ll=="WARN" || ll=="warn")
        {
            BMSAnalytics.Logger.setLogLevel('warn');
        }
        else if(ll=="ERROR" || ll=="error")
        {
            BMSAnalytics.Logger.setLogLevel('error');
        }
        else if(ll=="FATAL" || ll=="fatal")
        {
            BMSAnalytics.Logger.setLogLevel('fatal');
        }
        else 
        {
            statusText.innerHTML = "Log Level not valid";
        }

        statusText.innerHTML ="Setting Logging Level "+document.getElementById("loglevelset").value;
        //BMSAnalytics.Logger.setLogLevel(document.getElementById("loglevelset").value);

        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          
        
      },





      "sendLog": function sendLog() { 
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Logging with some verbosity level ...";
        infoText.innerHTML = "";

        var ll=document.getElementById("logTextLevel").value;
        var lt=document.getElementById("logText").value;
        if(ll=="TRACE" || ll=="trace")
        {
           BMSAnalytics.Logger.trace(lt);
        }
        else if(ll=="DEBUG" || ll=="debug")
        {
            BMSAnalytics.Logger.debug(lt);
        }
        else if(ll=="INFO" || ll=="info")
        {
            BMSAnalytics.Logger.info(lt);
        }
        else if(ll=="WARN" || ll=="warn")
        {
            BMSAnalytics.Logger.warn(lt);
        }
        else if(ll=="ERROR" || ll=="error")
        {
            BMSAnalytics.Logger.error(lt);
        }
        else if(ll=="FATAL" || ll=="fatal")
        {
            BMSAnalytics.Logger.fatal(lt);
        }
        else 
        {
            statusText.innerHTML = "Logging Verbose Level not valid";
        }

        BMSAnalytics.Logger.send();
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          
 
      },



      "enableAnalytics":function enableAnalytics() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Enabling Analytics Log Storage ...";
        infoText.innerHTML = "";

        BMSAnalytics.enable();
        
        setTimeout(function(){
            statusText.innerHTML = " Analytics Log Storage Enabled..."; 
        }, 2000);          

                
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          

      },

      "disableAnalytics":function disableAnalytics() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Disabling Analytics Log Storage ...";
        infoText.innerHTML = "";

        BMSAnalytics.disable();
        
        setTimeout(function(){
            statusText.innerHTML = " Analytics Log Storage Disabled..."; 
        }, 2000);          

                
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          

      }, 

       "sendAnalytics":function sendAnalytics() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Sending Analytics Logs  ...";
        infoText.innerHTML = "";

        BMSAnalytics.send();
        
        setTimeout(function(){
            statusText.innerHTML = " Analytics Log Sent. "; 
        }, 2000);          

                
        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          

      },

      "customLogAnalytics":function customLogAnalytics() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Sending Analytics Custom Log  ...";
        infoText.innerHTML = "";

        BMSAnalytics.log(document.getElementById("analyticscustomlog").value);

        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);

      },

      "getlogStoreSize":function getlogStoreSize() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Max Size of Log Store"+BMSAnalytics.Logger.getMaxLogStoreSize();
        infoText.innerHTML = "";

        setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          

      },

      "setlogStoreSize":function setlogStoreSize() {
        var titleText = document.getElementById("main_title");
        var statusText = document.getElementById("main_status");
        var infoText = document.getElementById("main_info");
        
        statusText.innerHTML = "Setting Max Size of Log Store ...";
        infoText.innerHTML = "";

        var maxlogsize=parseInt(document.getElementById("logStoreSize").value);
        BMSAnalytics.Logger.setMaxLogStoreSize(maxlogsize);

        statusText.innerHTML = "Max Size of Log Store set to "+ document.getElementById("logStoreSize").value; 
        
         setTimeout(function(){
            statusText.innerHTML = ""; 
        }, 2000);          


      }
    
    }
             
    app.init();
     
        // });
      
   


});



