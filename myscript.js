var deviceDetails = { platform: device.platform, model: device.model, 
    manufacturer: device.manufacturer, osVersion: device.version,
      }; 
    var deviceDetailsString = JSON.stringify(deviceDetails); output.myFlow = deviceDetailsString;
    
   