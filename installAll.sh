#!/bin/bash

echo "Setting up nodejs..."
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -


echo "Starting nodejs install"
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

echo "Setting up noble..."
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev

echo "Clonning scratch tool..."


echo "installing noble & rolling-spider packages..."
sudo npm install -y noble
sudo npm install -y  rolling-spider

cd scratch2airborne 


echo "Done!"
