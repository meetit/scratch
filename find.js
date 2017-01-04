'use strict';

var noble = require('noble');
var knownDevices = [];
var counter = 0;

if (noble.state === 'poweredOn') {
  start()
} else {
  noble.on('stateChange', start);
}

function start () {
  console.log("Trying to find nearby bluetooth devices...\n")
  noble.startScanning();

  noble.on('discover', function(peripheral) {
    counter++;

    console.log(
      "------"+counter+": \n",
      peripheral.uuid,peripheral.advertisement.localName);
    if(peripheral.advertisement.localName && peripheral.advertisement.localName.indexOf('Maclan_') === 0){
      console.log(peripheral.advertisement.manufacturerData.toString('hex'));
    }

    var details = {
      name: peripheral.advertisement.localName,
      uuid: peripheral.uuid,
      rssi: peripheral.rssi
    };

    knownDevices.push(details);
    console.log(knownDevices.length + ': ' + details.name + ' (' + details.uuid + '), RSSI ' + details.rssi);
  });
}
