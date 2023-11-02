# FAQs of DSGW-210 RK3328 Gateway Hardware Development  
## BSP Support  
### How you are supporting the device kernel development (like the BSP = Board Support Packages) for DSGW-210?  
It is included in the [DSGW-210 SDK package](https://drive.google.com/file/d/1i_vDZ-LLWvsb8IMXVAE1BYTFEv45zVBv/view) we shared.

## OpenThread Related  
### Does the DSGW-210-X-9 support openThread and its API?  
The gateway hardware support it, but the software need to be developed on customer side. If requied, we may need to add it on development schedule.  

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
