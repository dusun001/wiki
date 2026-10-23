# User Manual For DSGW-210-HA OS System

## 1. Introduction

This document provides a comprehensive guide to setting up and using the Home Assistant OS on the DSGW-210 gateway. It includes configuration instructions for Bluetooth, Zigbee, Z-Wave, Wi-Fi, and LTE modules, along with LED indicator status rules and a guide on how to disable the battery.

## 2. Home Assistant Web Login

Enter in the browser: Gateway IP:8123

Upon first launch, Home Assistant will automatically download and install necessary components. This process may take a significant amount of time. Please be patient and ensure a stable internet connection.

![Manual screenshot 1](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image1.png)

Upon successful launch, you may commence configuring your account information.

![Manual screenshot 2](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image2.png)

![Manual screenshot 3](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image3.png)

## 3. Zigbee Configure

### 3.1 Install Add-on

After logging into the HA interface, select "Settings" from the left navigation bar, then choose "Add-ons".

![Manual screenshot 4](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image4.png)

Click the "Add-on Store" button in the lower-right corner of the page.

![Manual screenshot 5](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image5.png)

Click the menu button in the upper-right corner of the page and select "Repositories".

![Manual screenshot 6](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image6.png)

Add the repository by entering the URL [https://github.com/zigbee2mqtt/hassio-zigbee2mqtt](https://github.com/zigbee2mqtt/hassio-zigbee2mqtt) and clicking Add, then close the window.

![Manual screenshot 7](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image7.png)

Add Zigbee2MQTT

![Manual screenshot 8](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image8.png)

Install Zigbee2MQTT

![Manual screenshot 9](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image9.png)

Turn on Watchdog and Show in Sidebar, then click Start.

![Manual screenshot 10](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image10.png)

### 3.2 Configuration

Click Zigbee2MQTT in the left navigation bar to start Zigbee configuration.

![Manual screenshot 11](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image11.png)

Enter /dev/ttyUSB1 in the Port/Path field, select ember for Type/Stack/Driver, and choose 115200 for Baudrate.

![Manual screenshot 12](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image12.png)

Replace the default mqtt://localhost:1883 with your server address (e.g., mqtt://192.168.1.100:1883). If authentication is required, provide the MQTT User and Password.

![Manual screenshot 13](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image13.png)

Click Submit

![Manual screenshot 14](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image14.png)

Zigbee2MQTT configured successfully.

![Manual screenshot 15](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image15.png)

### 3.3 Log

If any errors occur, you can view the log information by going to Settings → Add-ons → Zigbee2MQTT → Log.

![Manual screenshot 16](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image16.png)

## 4. Z-Wave Configure

### 4.1 Install Add-on

After logging into the HA interface, select "Settings" from the left navigation bar, then choose "Add-ons".

![Manual screenshot 17](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image4.png)

Click the "Add-on Store" button in the lower-right corner of the page.

![Manual screenshot 18](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image5.png)

Click Z-Wave JS UI

![Manual screenshot 19](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image17.png)

Install Z-Wave JS UI

![Manual screenshot 20](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image18.png)

Turn on Watchdog and Show in Sidebar, then click Start.

![Manual screenshot 21](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image19.png)

### 4.2 Configuration

Click Z-Wave JS in the left navigation bar to start Zigbee configuration.

Serial Port：/dev/ttyS1

RF Region：Select the appropriate frequency band for Z-Wave.

![Manual screenshot 22](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image20.png)

### 4.3 Log

If any errors occur, you can view the log information by going to Settings → Add-ons → Z-Wave JS UI → Log.

![Manual screenshot 23](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image21.png)

## 5. Add Bluetooth

After logging into the HA interface, select "Settings" from the left navigation bar, then choose "Devices & services".

![Manual screenshot 24](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image22.png)

Click the "Add integration" button in the lower-right corner of the page.

![Manual screenshot 25](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image23.png)

Click Submit

![Manual screenshot 26](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image24.png)

## 6. Network Configure

After logging into the HA interface, select "Settings" from the left navigation bar, then choose "System".

![Manual screenshot 27](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image25.png)

Click Network

![Manual screenshot 28](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image26.png)

### 6.1 WAN

eth0 supports DHCP and static configuration.

![Manual screenshot 29](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image27.png)

### 6.2 WIFI

Click "Search networks" for wlan1, select your Wi-Fi network, enter the password, and connect.

![Manual screenshot 30](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/UM/DSGW-210-HA/image28.png)

## 7. LTE

After powering off the gateway, insert the SIM card. Then power on the gateway — LTE will automatically initiate dial-up.

## 8. LED Indicator Description

- Red：No network connection，or system starting up.

- Blue：Network connected.

- Green：DNS unreachable.

## 9. Battery Operations

Ture off battery:

- Press and hold the function key for over 5 seconds, then release to turn off the battery.

- Double-press the function key to turn off the battery immediately.

> Note: When the battery is turned off while the gateway is powered by an adapter, the LED indicators will temporarily turn off, but the gateway continues operating normally.
