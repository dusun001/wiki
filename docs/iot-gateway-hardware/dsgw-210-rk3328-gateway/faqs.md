# FAQs of DSGW-210 RK3328 Gateway Hardware Development  
## BSP Support  
Q: How you are supporting the device kernel development (like the BSP = Board Support Packages) for DSGW-210?  
A: It is included in the [DSGW-210 SDK package](https://drive.google.com/file/d/1i_vDZ-LLWvsb8IMXVAE1BYTFEv45zVBv/view) we shared.

## OpenThread Related  
Q: Does the DSGW-210-X-9 support openThread and its API?  
A: The gateway hardware support it, but the software need to be developed on customer side. If requied, we may need to add it on development schedule.  

## Zigbee2MQTT FAQs
Q: I want to install the Zigbee2MQTT service as in 
https://www.zigbee2mqtt.io/guide/getting-started/ and
I have gone through all steps in both guides without success. I was able to install the service but when starting the service I get this error:
reset error: error: {"sequence":-1} after 10000ms at /root/zigbee2mqtt/zigbee2mqtt/node_modules/zigbeeherdsman/src/adapter/ezsp/driver/uart.ts:299:23%0d%0a
A: For detailed analysis of specific problems, it is often recommended to use remote debugging. The following list outlines the most common causes and their corresponding solutions for reference:
1. Log in gateway using ssh, username:root; password: root
2. Run ps | grep Amber and record the usb port it's using, for example /dev/ttyUSB1
3. Run 'kill -9 $(pidof AmberGwZ3)' command to stop the zigbee program
4. Use the recorded USB port in section 2 to start zigbee2mqtt again  

## Matter  
Q: Whether DSGW-210 gateway can support zigbee3.0 and matter together? zigbee, matter for downlink and wifi for uplink.  
A: Currently not, but it is doable on gateways like DSGW-210 by adding modules on the board.  


## Bluetooth  
Q: What is the maximum number of Bluetooth devices that can be connected simultaneously and sending data to the gateway?  
A: There is no standard answer, as it depends on factors such as the packet size and transmission interval. However, if you enable notification after connecting the sensor, we recommend a limit of no more than 10 devices sending data at the same time, particularly when the notification interval is around 300ms. This recommendation is provided to ensure optimal performance and stability.  

## WiFi  
Q: Is there a way to increase the TX power for WIFI on the 11n HT40 mode? We have sensors in industrial environments that are placed at various distances from our gateways at the moment, and we require a high TX power setting.  
A: The current TX power is 14dBm, if you want more, we can add an external antenna to amplify the strength.  

## GPS Function  
Q: Does the DSGW-210 gateway support LTE Cat M1 and GPS?  
A: Yes, the BG96 module in the DSGW-210 does support LTE Cat M1 and GPS. However, please note that the GPS function is not enabled by default in the standard unit. If you require GPS functionality, please highlight this demand, and it can be accommodated accordingly.   

## Resource Download  
Q: Where can we download DSGW-210 SDK file?  
A: The DSGW-210 SDK file can be downloaded [here](https://drive.google.com/drive/folders/1YBrIGUEy9PNRYXKCqPS48--CztUXaUPW?usp=drive_link).  

## ODM  
Q: Can the DSGW-210 gateway be customized to support a second SIM card for a secondary cellular connection as a fallback option?  
A: Yes, we can provide a customized design for the gateway with support for a second SIM card. This additional feature would allow the gateway to have a secondary cellular connection to fall back on when needed. Please note that this customization may be subject to different minimum order quantity (MOQ) requirements. To discuss your specific requirements and inquire about the customization process, please contact us directly.  

Q: can you recommend a gateway which support NVMe SSD?  
A: It is implementable on [DSGW-290](https://wiki.dusuniot.com/iot-gateway-hardware/dsgw-290-rk3568-gateway/overview).  

## Programmability  
Q: how to redefine the button function of gateway?
A: You can refer to the SDK to get an example of it. Section 7.1.6
https://drive.google.com/drive/folders/1Qt4hL3bwSXRkk3wZl98dXxkTCUWYT-pl

## Other  
Q: How I put the DSGW-210 into MASKROM mode?  
A: Set the Gateway to MASKROM mode for upgrading by two steps,
For ‘RST button’ and ‘Reboot button’, please refer to the picture below
1)  Long press and hold the RST button on the gateway. 
2)  While holding the RST button, quickly press the Reboot button once. 
3)  Keep holding the Power button and do not release it until the AndroidTool displays the message ‘Found One MASKROM Device.  

Note:  
a) Do not release the RST button until you see the 'Found One MASKROM Device' message in the RKDevTool;  
b) If you are unable to see the MASKROM device even after following these steps, please leave a message in [Dusun IoT Forum](https://community.dusuniot.com/c/products/dsgw-210/34) for further assistance.