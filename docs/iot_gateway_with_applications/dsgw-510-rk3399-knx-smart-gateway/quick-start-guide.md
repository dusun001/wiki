
## 1.Introduction

This Quick Start Guide explains the basics: <br />
- how to connect and set up your target on the network <br />
- how to install the SDK <br />
- how to modify and build the firmware images <br />
The Linux Software Developer’s Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun’s DSGW-510 Industrial control board. <br />


## 2.Baseboard Information

This section describes the baseboard’s basic resource infomation and interfaces.<br />

### 2.1 Peripherals & Interfaces

| **Category**             | **Specifications**                                                  |
| :----------------------- | :------------------------------------------------------------------ |
| Master                   | RK3399,  dual-core Cortex-A72 andquad-core Cortex-A53               |
| DDR                      | D4GB                                                                |
| RAM                      | 32GB                                                                |
| SYSTEM                   | Debian 12                                                           |
| WIFI                     | BL-M8821CU1 Modules                                                 |
| ZIGBEE/ZWAVE             | USB Type-C 5V/3A                                                    |
| LTE                      |  EC25EUX                                                            |
| Ethernet                 | 2-way，1000M                                                        |
| RS485                    | 2-way                                                               |
| RS232                    | 1-way                                                               |
| RS232                    | 1-way                                                               |
| MBUS                     | 1-way                                                               |
| KNX                      | 1). Power & battery LED 2).  Wireless LED 3）LTE indicator          |
| USB                      | 3-way，2*USB3.0 TYPEA、1*Micro PRO  ( 1-way USB3.0 TYPEA and Micro PRO Multiplex one USB2.0 bus, default is Micro PRO)                                                 |
| HDMI                     | 1-way                                                               |
| KEY                      | 2-way ，1*USER KEY、1*RESET KEY                                     |
| LED                      | 6*LED（LED_PWR1、LED1、LED_4G、LED_WIFI、LED_ ZIGBEE、KNX_PROG_LED） |
| RTC                      | 1-way                                                               |
| Power supply mode        | DC 6 ~ 30V                                                          |


### 2.2 Appearance

#### 2.2.1 Main board

Front:<br />

![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/1.png)

Back:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/2.png)


#### 2.2.2 Interface board

Front:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/3.png)

Back:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/4.png)

#### 2.2.3 RF board

Front:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/5.png)

Back:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/6.png)

## 3.Instructions
Debug Setup This section describes how to connect the board into your host computer and network to debug for development. <br />
### 3.1 Equipment preparation
- A DSGW-510 industrial control board. <br />
- A power adapter with a range of 6~30V.  <br />
- A monitor or TV with an HDMI port and an HDMI cable. <br />
- 100M/1000M Ethernet cable and router. <br />
- USB wireless/wired mouse/keyboard. <br />

### 3.2 Power on
- Make sure that the power adapter is 12V/2A.  <br />
- Select the appropriate power plug adaptor for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet.  <br />
- Connect the power output plug to the industrial control board, and the power indicator light will turn on. <br />

### 3.3 Download Tools

Down1oad RK Driver Assistant DriverAssitant-RKDriver Assistant and the flashing tool RKDevTool.<br />
Install the USB driver using the RK Driver Assistant. No need to connect the device during this process. After installation, restart your computer. <br />

![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/7.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/8.png)

### 3.4 Debug Uart Connect 
- Before you set up your development test bed, please connect the PCB serial port to your develop PC via USB-to-serial bridge.  <br />
- PCB serial port on Gateway <br />

![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/9.png)

- Open the serial port tool settings on the computer: <br />
Baud rate: 1500000 <br />
Bits: 8 <br />
Stop Bits: 1 <br />
Hardware flow control: None <br />

![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/10.png)


## 4.SDK Download And Compile 
This section describes how to download the sdk and compile it. <br /> 
### 4.1 SDK Envirment Prepare 
Compilation environment: Linux system Ubuntu20.04  <br />

### 4.2 SDK Download 
- Get the source code from Dusun FTP server uncompress it under your work directory. For example: download DSGW-510-DB-SDK  <br />
```
https://drive.google.com/drive/folders/1flUGzsSwJH01Cj-7s0VlzsiAKQZoxifD?usp=drive_link
```
- After downloading, copy it to the Linux server <br />
```
#Create a new SDK working directory
$ mkdir  -p ~/work_dir/dsgw510
#Copy the downloaded SDK to the working directory
$ cp rk3399-linux-dsgw-510.tar.gz* ~/work_dir/
$ cd ~/work_dir/
# Unzip the SDK to the working directory
$ cat rk3399-linux-dsgw-510.tar.gz* | tar zxf  -C ./dsgw510/
$ cd dsgw510 && ls
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/11.png)

### 4.3 SDK Compile 	
environment & compilation: <br />
- Compile All, One-click firmware generation <br />
```
$ ./build.sh
```
Compilation is complete and the firmware path is generated.

- Compile the uboot separately <br />
```
$ ./build.sh uboot
```
- Compile the kernel separately <br />
```
$ ./build.sh kernel
```
- Image packaging to generate firmware  <br />
```
$ ./build.sh updateimg
```

### 4.4 SDK Output 
Generate the full firmware file directory: output/update/Image/ <br />
update.img contains all the separately compiled firmware, the generated upgrade firmware<br />
uboot.img is the uboot partition firmware<br />
boot.img is the kernel partition firmware<br />
rootfs.img is the file system partition firmware<br />
recovery.img is the recovery partition firmware<br />
```
$ ls -l output/update/Image/
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/12.png)
If the compilation fails, please according to the error information, their own Baidu or google to solve or view the compilation error common problems document, really can not solve the problem, you can record the complete error information, through technical communication group consultation. <br />

## 5.Firmware Program And Upgrade 
### 5.1 Firmware Program 

USB OTG: <br />
- Driver installation (burn mirror/ADB debugging)  <br />
1.Unzip driverAsSatant_v5.0 <br />
2.Open driverinstall.exe <br />
3.Click Drive Installation, and it will show that the installation driver is successful <br />

- Mirror Upgrade Tool  <br />
1.Unzip AndroidTool_Release_V3.31 <br />

- Enter the upgrade mode <br />
1. Connect the OTG port to the burning computer<br />
2. Connect the power supply <br />
3. Plug in the voltage and wait for the display of “Found One ADB Device”<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/13.png)
4. Click on the Switch , display “Found One LOADER Device”<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/14.png)<br />
5. Select the firmware, click Upgrade, and wait for the upgrade process to complete. 
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/15.png)

- Method 2: You can also press and hold the Recovery key to enter the LOADER mode. After the message "Found One LOADER Device" is displayed, select the firmware to burn.

## 6.Gateway Login 
### 6.1 Login Through Debug Uart 
connect uart serial tool to the board’s debug uart port <br />
config the serial tools’s uart config: <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/16.png)
Login Account：root  , password: root <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/17.png)

### 6.2 Login Through Network(SSH) 
Username: root Password: root
- config the ssh connection parameters <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/18.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/19.png)
- connect success  <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/20.png)

## 7.Application Layer Development 
### 7.1 I2C 
the board has two i2c bus 
- i2cdetect  <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/21.png)
- i2cdump  <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/22.png)
- i2cget  <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/23.png)

### 7.2 GPIO 
- see the gpios used by kernel <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/24.png)
- gpio export N is the gpio number.  <br />
```
$ echo N > /sys/class/gpio/export 
```
- gpio out on/off  <br />
```
$ echo out > /sys/class/gpio/gpioN/direction 
$ echo 1 > /sys/class/gpio/gpioN/value 
$ echo 0 > /sys/class/gpio/gpioN/value 
```
- gpio in  <br />
```
$ echo in > /sys/class/gpio/gpioN/direction 
```
### 7.3 UART
The board has one uart used by user ttyS  <br />

- install minicom <br />
```
$ apt-get update; apt-get install minicom 
```

- Configure UART using minicom <br />
```
$ minicom -s 
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/25.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/26.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/27.png)
- Short the UART rx and tx pins to test the continuity.Prees any key, it will receive any key in loopback mode  <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/28.png)

### 7.4 Kernel DTS Description 
This Gateway’s dts file is the rk3399-evb-ind-lpddr4-linux.dts  <br />

## 8.External interface usage 
### 8.1 HDMI
Plug in a USB keyboard and USB mouse, and connect the monitor and power adapter to the DSGW-510 development board. (When you power on the board for the first time, please wait patiently for a moment until the desktop is loaded. Do not unplug the power cord during this period.) <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/29.png)

### 8.2 Ethernet 
This board has one wan port eth0 work as dhcp <br />
```
$ ifconfig
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/30.png)

### 8.3 DEBUG
Connect USB-TYPE-C to the computer, refer to 6.1 Connection. <br />
### 8.4 USB
Plug in sub-devices such as mouse and keyboard, and you can test the function through the HDMI page.
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/31.png)

### 8.5 LTE-4G
First confirm that the SIM card is inserted and use the shell script to dial.<br />

- Start the LTE module <br />
```
$ bg96_powerup.sh on
```

- Send AT commands <br />
```
$ pppcmd /dev/ttyUSB3 AT+CPIN?
```

- Automatic dialing <br />
```
$ bg96_dial.sh
```

### 8.6 RTC
Test by powering off without intervening in the network and then powering on to see if the time is restored to the factory settings. <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/32.png)

## 8.7 LED
Switch LED light. <br />
```
$ ls /sys/class/leds/
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/33.png)

### 8.8 RS485
The uart device number used by RS485 is ttyCH343USB0 and ttyCH343USB3 <br />
### 8.9 RS232
The uart device number used by RS232 is ttyCH343USB2 <br />
### 8.10 MBUS
The uart device number used by MBUS is /dev/ttyCH343USB1 <br />
### 8.11 Zigbee/ Zwave
The uart device number used by Zigbee/ Zwave is /dev/ttyS0 <br />
### 8.12 KNX
KNX connects to sub-devices (KNXH1 and KNXG1). After sending a command, the program automatically determines whether it is normal. If normal, it returns "ok"; otherwise, it returns "FAIL". <br />shell commands：test.sh knx_test <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/34.png)

### 8.13 CAN
Set CAN parameters to enable and connect the CAN port to USBCANTool for testing. <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/35.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/36.png)

### 8.14 OTG 
The OTG used to program the board. See Section 5.1 <br />
### 8.15 RECOVERY 
This Key Used to switch the board to MaskRom Mode.  <br />
### 8.16 Key  RST 
This Key used to reset the board.  <br />
### 8.17 WIFI
The board has one wifi mode BL-M8821CU1 <br />
- ifconfig wlan0/wlan1  <br />
```
$ ifconfig wlan0
$ ifconfig wlan1
```

- add supplicant config file <br />
```
$ cat > /etc/wpa_supplicant.conf <<EOF
ctrl_interface=/var/run/wpa_supplicant
ctrl_interface_group=0
update_config=1

network={
    scan_ssid=1
    ssid="AAAAAA"
    psk="dl123456"
    key_mgmt=WPA-PSK
}
EOF
```

- add network interface <br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/37.png)

- up wlan1  <br />
```
$ ifconfig wlan1 up
```
- scan  <br />
```
$ wpa_cli -i wlan1 scan 
OK 
```
- scan results <br />
```
$ wpa_cli -i wlan1 scan_result; 
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/38.png)

- wpa_cli command to connect to WiFi  <br />
```
$ wpa_cli -i wlan1 add_network 
$ wpa_cli -i wlan1 list_network 
$ wpa_cli -i wlan1 set_network 1 ssid '"AAAAAA"'
$ wpa_cli -i wlan1 set_network 1 psk '"dl123456"'
$ wpa_cli -i wlan1 set_network 1 key_mgmt WPA-PSK
$ wpa_cli -i wlan1 set_network 1 priority 2
$ wpa_cli -i wlan1 set_network 1 scan_ssid 1
$ wpa_cli -i wlan1 enable_network 1
$ wpa_cli -i wlan1 select_network 1
$ wpa_cli -i wlan1 save_config
$ udhcpc -i wlan1
# List of added networks
$ wpa_cli -i wlan1 list_network network id/ssid/bssid/flags
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/39.png)


- nmcli command to connect to WiFi  <br />
```
# View a list of available WiFi networks.
$ nmcli device wifi list
```

![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/40.png)

Connect to WiFi (replace SSID and password). <br />
```
$nmcli device wifi connect "YourWiFiSSID" password "YourPassword"
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/41.png)

Check the connection status . <br />
```
$ nmcli connection showCheck the connection status .
```
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/42.png)


## 9.Support 
Please contact our sell to get more support.<br /> 	
- Tel
+86-571-86769027/88810480 <br />
- Website:  <br />
www.dusuniot.com 	<br />			 
www.dusunremotes.com <br />				
www.hzdusun.com<br />



