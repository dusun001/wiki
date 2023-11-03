# FAQs of DSGW-030 MTK7688 Gateway Hardware Development  
## Zigbee Related  
### For your Zigbee 3.0 gateway, whether it support WiFi to connect to iot sensors downlink?  
Normally the Zigbee sensors connects with [Zigbee gateways](https://www.dusuniot.com/landing-pages/zigbee-gateways/) through Zigbee protocol. The gateway always support WiFi AP mode, if the sensor enables WiFi ability, it can be connected via WiFi. 

## Z-Wave Related
### I want a zwave tuya zigbee gateway, do you have it?  
Currently not, as tuya doesn't support zwave, maybe you can choose [DSGW-210 Home Assistant Zigbee Z-Wave gateway](https://www.dusuniot.com/product/dsgw-210-home-assistant-zigbee-gateway/) to do some integration on it.

### Once logged in to the gateway over SSH, how would I see the traffic on the Z-Wave interface? 
You could see the log of Z-Wave application by running the program in front end. It can be achieved by command /etc/init.d/zwdev stop; sleep 5;  /usr/bin/zwdevd -d /dev/ttyUSB0 -b 115200 

