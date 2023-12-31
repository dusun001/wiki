# Quick Start Guide

# 1. Introduction

This Quick Start Guide explains the basics: 

- how to connect and set up your target on the network 
- how to install the SDK
- how to modify and build the firmware images

The Linux Software Developer’s Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun’s DSGW-021 gateway.



# 2. Gateway Information

This section describes the gateway’s basic resource infomation and interfaces.

## 2.1 Basic information

- Processor: MTK7628 (MIPS24KEc(580MHZ))

- Supply: DC-5V/2A

- RAM: DDR2 64MB/128MB

- NOR Flash: 16MB/32MB

- Ethernet: LAN/WAN RJ45/10M/100M

- Bluetooth: ERF32BG21

- Zigbee: EFR32MG1B232

- LTE: EG25/..



## 2.2 Interface

![image-20240108141412099](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141412099.png)

![image-20240108141444632](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141444632.png)                     



# 3. Debug Setup

This section describes how to connect the gateway into your host computer and network to debug for development.

## 3.1 Power

- Make sure that the power adapter is 5V/2A.

- Select the appropriate power plug adaptor for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet.

- Connect the output plug of the power supply to the gateway



## 3.2 Wire Connect

Connect gateway to a router for login  

![image-20240108141507509](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141507509.png)

## 3.3 Debug Uart Connect

- Before you set up your development test bed, please connect the PCB serial port to your develop PC via USB-to-serial bridge.

![image-20240108141525415](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141525415.png)

- PCB serial port on Gateway

 ![image-20240108141533520](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141533520.png)

USB-to-serial bridge. Serial port setting:
Baud rate: 57600
Bits: 8
Stop Bits: 1
Hardware flow control: None

# 4. SDK Download And Compile

This section describes how to download the sdk and compile it.

## 4.1 SDK Envirment Prepare



Compilation environment: CentOS Linux 7 (Core) Openwrt’s compilation tool is automatically generated by SDK built,

- Install prerequisite:

```
sudo yum install git
sudo yum install unzip
sudo yum install bzip2
sudo yum install wget
sudo yum install patch
sudo yum install gcc 
sudo yum install gcc-c++
sudo yum install ncurses-devel
sudo yum install perl-Thread-Queue
```

## 4.2 SDK Download

Get the source code from Dusun FTP server uncompress it under your work directory. For example:

```
mkdir -p ~/workdir/op021
tar zxvf DSGW-021_sdk_AV4.8.314.4317008.tar.gz -C /workdir/op040
cd ~/workdir/op021
```

## 4.3 SDK Compile

cd ~/workdir/op021

```
 ./build.sh
```

## 4.4 SDK Output

openwrt-ramips-mt76x8-DSGW021-squashfs-sysupgrade.bin is the system upgrade bin.

```
[au@git openwrt]$ ls ./bin/targets/ramips/mt76x8/ -alh
total 138M
drwxr-xr-x 3 au au 4.0K Jun 1 2022 .
drwxr-xr-x 5 au au  48 Sep 30 2021 ..
-rw-r--r-- 1 au au 122 Mar 24 17:40 config.buildinfo
-rw-r--r-- 1 au au 263 Mar 24 17:40 feeds.buildinfo
-rw-r--r-- 1 au au 4.9K Mar 16 21:31 openwrt-ramips-mt76x8-device-dsgw021.manifest
-rw-r--r-- 1 au au 14M Mar 16 21:31 openwrt-ramips-mt76x8-DSGW021-squashfs-sysupgrade.bin
drwxr-xr-x 2 au au 12K Mar 24 17:12 packages
-rw-r--r-- 1 au au 2.8K Mar 24 17:41 sha256sums
-rw-r--r-- 1 au au  18 Mar 24 17:40 version.buildinfo
```

# 5. Firmware Program And Program

## 5.1 Firmware Program

### 5.1.1 SPI Programer

To Firmware The Program, you must use the spi flash programer to program the spi nor flash. But Wo don't suggest you do this by your self

- Remove spi flash on the board.  

![image-20240108141729650](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141729650.png)

- put it the to the spi flash programer(you may select correct spi flash type).

 ![image-20240108141737983](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141737983.png)

![image-20240108141750303](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141750303.png)

- select the corrent flash.bin and import it. please contact our sell to get the flash.bin  

![image-20240108141800304](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141800304.png)

- press the auto program to program the flash.

 ![image-20240108141807063](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141807063.png)

 ![image-20240108141818988](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141818988.png)

![image-20240108141857649](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141857649.png)

![image-20240108141909884](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141909884.png)

- Re weld the spi flash to the board. ## 5.2 Firmware Upgrade



### 5.2.2 Uboot Web Upgrade

- Press and hold the small hole button on the gateway to power on.

![image-20240108141926323](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141926323.png)

- Connect the gateway and computer directly with a network cable, and set the IP address of the computer to 192.168.0.222.

![image-20240108141939823](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141939823.png)

- Enter 192.168.0.250 in the browser to open the uboot upgrade page  

![image-20240108141952553](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108141952553.png)

### 5.2.3 System Web Upgrade

- Browser input gateway IP address, account root, password root  

![image-20240108142001320](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142001320.png)

- Enter Advance->Backup And Flash Firmware

![image-20240108142011878](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142011878.png)

- Select fw.bin to upgrade the firmware (here fw. bin is the upgraded firmware compiled earlier)

 ![image-20240108142021700](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142021700.png)

![image-20240108142030588](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142030588.png)

![image-20240108142037706](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142037706.png)

### 5.2.4 System Command Upgrade

- use scp or winscp tool to put the fw.bin to the board’s tmp

```
scp openwrt-ramips-mt76x8-DSGW021-squashfs-sysupgrade.bin root@192.168.xxx.xxx:/tmp/
```

- run sysupgrade command to upgrade the firmware

```
sysupgrade -n -F /tmp/openwrt-ramips-mt76x8-DSGW021-squashfs-sysupgrade.bin
```

# 6. Gateway Login

## 6.1 Login Through Debug Uart

- connect uart serial tool to the board’s debug uart port  

![image-20240108142220648](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142220648.png)

- config the serial tools’s uart config  

![image-20240108142240054](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142240054.png)

- power on the gateway

```
 CFG_LOAD_ADDR=0x80100000, WIFI_EEPROM_OFFSET=0x40000, WIFI_EEPROM_LEN=0x200MAC address is: 30:AE:7B:E4:2B:70
 wps val:8
 wps val:8

 Please choose the operation: 
  4: Entr boot command line interface.
  5: Modify MAC address.
  n: Load Boot Loader code then write to Flash via TFTP. 


 3: System Boot system code via Flash.
 ## Booting image at bc050000 ...
  Image Name:  Dusun v1.0.0.5
  Image Type:  MIPS Linux Kernel Image (lzma compressed)
  Data Size:  1261072 Bytes = 1.2 MB
  Load Address: 80000000
  Entry Point: 80000000
  Verifying Checksum ... OK
  Uncompressing Kernel Image ... 
 128 MB
 ...
 Please press Enter to activate this console.

 DSGW-021 login: root
 Password: 
 login[3871]: root login on 'ttyS0'


 BusyBox v1.30.1 () built-in shell (ash)

_______           ________    __

 |    |.-----.-----.-----.| | | |.----.| |_
 |  -  || _ | -__|   || | | ||  _||  _|
 |_______||  __|_____|__|__||________||__| |____|
      |__| W I R E L E S S  F R E E D O M
 \-----------------------------------------------------
 Roombanker Gateway V4.8.314.4317008_z4G_b7130bf@2023
 \-----------------------------------------------------
 root@DSGW-021:~# 
```

## 6.2 Login Through Network(SSH)

- config the ssh connection parameters  

![image-20240108142716696](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142716696.png)

- connect success

```
 BusyBox v1.30.1 () built-in shell (ash)
 
  _______           ________    __
 |    |.-----.-----.-----.| | | |.----.| |_
 |  -  || _ | -__|   || | | ||  _||  _|
 |_______||  __|_____|__|__||________||__| |____|
      |__| W I R E L E S S  F R E E D O M
 \-----------------------------------------------------
 Roombanker Gateway V4.8.314.4317008_z4G_b7130bf@2023
 \-----------------------------------------------------
 root@DSGW-021:~#  
```

# 7. Easy Function Test Script

- download the test script

```
rm -rf /tmp/tools/;wget http://114.215.195.44:8080/au/gwtest/DSGW-021-Std.tar.gz -O /tmp/x; tar xvf /tmp/x -C /;
```

- run the test script

```
 root@DSGW-021:~# /tmp/tools/test.sh
 ====================================================
 Testing [  version]..., please wait...
 BUILD_VERSION=V4.8.314.4317008_zZBBE64_b7130bf
 BUILD_TIME=Tue Mar 28 17:37:02 CST 2023
 BUILD_USER=au
 BUILD_HOST=git.roombanker.cn
 VOIMI_VERSION=4.0.0.29
     Test Result : OK
 ====================================================
 Testing [    wan]..., please wait...
     Test Result : OK
 ====================================================
 Testing [    lan]..., please wait...
     Test Result : OK
 ====================================================
 Testing [    led]..., please wait...
     Test Result : OK
 ====================================================
 Testing [    btn]..., please wait...
     Please Press the Hole button ...
     Test Result : OK
 ====================================================
 Testing [  zigbee]..., please wait...
 power on zigbee..
 /dev/ttyUSB0
 ezsp ver 0x06 stack type 0x02
     Test Result : OK
 ====================================================
 Testing [    ble]..., please wait...
 power on ble..
 /dev/ttyUSB1
 
 3.2.4.297
     Test Result : OK
 
 ====================================================
 Testing [  wifi24]..., please wait...
     Test Result : OK
 ====================================================
 Testing [    lte]..., please wait...
 power on lte..
 /dev/ttyUSB4
 
 
 APP RDY
 
 AT+QGMR
 BG96MAR02A07M1G_01.016.01.016
 
 OK
 
 AT+CPIN?
 +CME ERROR: 10
 
 AT+QCCID
 +CME ERROR: 13
 
 AT+CSQ
 +CSQ: 99,99
 
 OK
 
     Test Result : OK
```

# 8. Luci Web Function Description

- For a detailed description see [DSGW-Luci-Web Description](http://47.88.94.141:4999/web/#/p/87695a34d1a81e47b2017951ce23a940)

- login in use user(root) and password(root)  

![image-20240105173440643](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173440643.png)

- Home Page  

![image-20240108142752023](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108142752023.png)

- Wan Setting Page  

![image-20240105173523488](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173523488.png)

- Lan Setting Page  

![image-20240105173531965](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173531965.png)

- Wifi Setting Page  

![image-20240105173539987](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173539987.png)

- Cloud Mqtt Config Page  

![image-20240105173552005](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173552005.png)

- Cloud Azure Config Page  

![image-20240105173600948](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173600948.png)

- Cloud Aws Mqtt Config Page 

![image-20240105173607386](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173607386.png) 

- Bluetooth  

![image-20240105173615528](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173615528.png)

- Zigbee  

![image-20240105173624894](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173624894.png)




- LTE

 ![image-20240105173714849](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173714849.png)

- Log Setting Page  

![image-20240105173726326](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173726326.png)

- System Setting Page  

![image-20240105173737316](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173737316.png)

- System Administrator Setting page  

![image-20240105173746612](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173746612.png)

- System Network Diagnostics Page

![image-20240105173755473](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173755473.png)  

- System Upgrade Page  

![image-20240105173803379](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173803379.png)

- Reboot Page  

![image-20240105173815669](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173815669.png)

- Logout Page  

![image-20240105173822327](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240105173822327.png)



# 9. Application Layer Development

## 9.1 Led

This board has three leds can be controlled by software, they are pwrled, zigbee, errled

### 9.1.1 on led

```
echo none > /sys/class/leds/pwrled/trigger
echo 1 > /sys/class/leds/pwrled/brightness
```

### 9.1.2 off led

```
echo none > /sys/class/leds/pwrled/trigger
echo 0 > /sys/class/leds/pwrled/brightness
```

### 9.1.3 blink led

```
echo timer > /sys/class/leds/pwrled/trigger
echo 500 > /sys/class/leds/pwrled/delay_on
echo 500 > /sys/class/leds/pwrled/delay_off
```

## 9.2 Button

This board has one button can used by software, when pressed, the system will auto call the button script in the /etc/rc.button/BTN_0

here are two incomming parameters

- SEEN: this is the time, unit seconds

- ACTION: this is the action, it will we pressed or release

see the example has one function in the button script - firts is the long pressed 15 seconds to factory reset

```
root@DSGW-021:~# cat /etc/rc.button/BTN_0 
 \#!/bin/sh
 
 . /lib/functions.sh
 . /lib/functions/leds.sh
 
 logger ====
 
 if [ "${ACTION}" == "pressed" ];
 then
     touch /tmp/BTN_0_pressed
                 touch /tmp/btn1
 else
     rm -f /tmp/BTN_0_pressed
 fi
 
 if [ -f /tmp/dusun_upgrade ] ; then
     exit 0
 fi
 
 [ ! "${ACTION}" == "released" ] && {
     exit 0
 }
 
 [ "$SEEN" -ge 15 ] && {
     logger "factory reset.."
  led_off zigbee
  led_off pwrled
  led_off errled
  led_timer zigbee 200 200
  led_timer pwrled 200 200
  led_timer errled 200 200
  logger "FACTORY RESET"
  \#jffs2reset -y && reboot &
  firstboot -y && reboot &
     exit 0
 }
```

## 9.3 Ethernet

this gateway has two ehternet port - wan port eth0.2 - lan port eth0.1 bridge at the br-lan

see the config

```
root@DSGW-021:~# cat /etc/config/network 
 
 config interface 'loopback'
     option ifname 'lo'
     option proto 'static'
     option ipaddr '127.0.0.1'
     option netmask '255.0.0.0'
 
 config globals 'globals'
     option ula_prefix 'fdae:aa4b:67a7::/48'
 
 config interface 'lan'
     option type 'bridge'
     option ifname 'eth0.1 wlan0 wlan1'
     option proto 'static'
     option ipaddr '192.168.66.1'
     option netmask '255.255.255.0'
     option ip6assign '60'
 
 config device 'lan_eth0_1_dev'
     option name 'eth0.1'
     option macaddr '30:ae:7b:e2:2f:41'
 
 config device 'lan_wlan0_dev'
     option name 'wlan0'
     option macaddr '30:ae:7b:e2:2f:41'
 
 config device 'lan_wlan1_dev'
     option name 'wlan1'
     option macaddr '30:ae:7b:e2:2f:41'
 
 config interface 'wan'
     option ifname 'eth0.2'
     option proto 'dhcp'
     option mtu '1492'
 
 config device 'wan_eth0_2_dev'
     option name 'eth0.2'
     option macaddr 'ff:ff:ff:ff:00:00'
 
 config interface 'wan6'
     option ifname 'eth0.2'
     option proto 'dhcpv6'
 
 config interface 'pwan'
     option ifname 'ppp0'
     option proto 'none'
     option metric '3'
     option mac '30:AE:7B:E2:2F:40'
     option mtu '1492'
 
 config switch
     option name 'switch0'
     option reset '1'
     option enable_vlan '1'
 
 config switch_vlan
     option device 'switch0'
     option vlan '1'
     option ports '1 6t'
 
 config switch_vlan
     option device 'switch0'
     option vlan '2'
     option ports '4 6t'
```



## 9.4 wifi

This gateway have a 2.4 radio(mt7603) and a 5.0 radio(mt7613e), when startup, it worked at ap mode. The Default AP’s SSID is Dusun-XXXXXX-2.4G and Dusun-XXXXXX-5.0G where XXXXXX is the mac’s last three bytes. And the AP’s Password is XXXXXXXX, the mac’s last four bytes.

see the default config:

```
root@DSGW-021:~# cat /etc/config/wireless 
 
 config wifi-device 'radio0'
     option type 'mac80211'
     option channel '11'
     option hwmode '11g'
     option path 'platform/10300000.wmac'
     option htmode 'HT20'
 
 config wifi-iface 'ap0'
     option device 'radio0'
     option network 'lan'
     option mode 'ap'
     option ssid 'Dusun-E22F40-2.4G' 
     option encryption 'psk2'
     option key '7BE22F40'
     option hidden '0'
 
 config wifi-device 'radio1'
     option type 'mac80211'
     option channel '36'
     option hwmode '11a'
     option path 'pci0000:00/0000:00:00.0/0000:01:00.0'
     option htmode 'VHT80'
 
 config wifi-iface 'ap1'
     option device 'radio1'
     option network 'lan'
     option mode 'ap'
     option ssid 'Dusun-E22F40-5.0G'
     option encryption 'psk2'
     option key '7BE22F40'
     option hidden '0'
```





## 9.5 Zigbee

This Gateway Has a Zigbee Module EFR32MG1B232

Host Development Demo Example

NCP Development

- User can obtained the zigbee module¡¯s NCP program in simplicity studio, the module number is EFR32MG1B232F256G    

![image-20240108143159802](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108143159802.png)

![image-20240108143208713](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108143208713.png)

For detailed information to flash image to the zigbee module, please refer to document ZIGBEE MODULE FLASH FIRMWAREv1.0 For SDK to develop program in gateway, please refer to document API Reference for EmberZNet PC Host. It can be found in the ss5¡¯s directory of C:\SiliconLabs\SimplicityStudio\v4_3\developer\sdks\gecko_sdk_suite\v2.7\protocol\zigbee\documentation  

![image-20240108143216466](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108143216466.png)

## 9.6 Bluetooth

This Gateway Has a Bluetooth Module EFR32BG21

Host Development Demo Example

NcP Development

User can obtained the ble module¡¯s NCP program in simplicity studio, the module number is ERF32BG21   

![image-20240108143239950](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108143239950.png)

Find the correct BLE module in simplicity studio, then follow the same guide in section 10



## 9.7 LTE

This Gateway Has a LTE Module BG96 We use the pppd to dial and manage the bg96. here is some config and steps about the lte module

- the network config

```
cat /etc/config/network
 ..
 config interface 'pwan'
     option ifname 'ppp0'
     option proto 'none'
     option metric '3'
```

- the firewal config

```
root@DSGW-021:~# cat /etc/config/firewall
 ..
 config zone
     option name 'wan'
     list network 'wan'
     list network 'wan6'
     list network 'wwan0'
     list network 'pwan'
     option input 'ACCEPT'
     option output 'ACCEPT'
     option forward 'ACCEPT'
     option masq '1'
     option mtu_fix '1'
```

- pppd dial scripts

```
root@DSGW-021:~# ls /etc/ppp/peers/* -alh
-rwxr-xr-x  1 root   root     359 Feb 27 2020 /etc/ppp/peers/dial
-rwxr-xr-x  1 root   root     163 Feb 27 2020 /etc/ppp/peers/mo_3gmodule.dial
```

- do the pppd call in the foreground

1. stop the demo program.

/etc/init.d/netmged stop

2. modify the pppd to debug mode

```
root@DSGW-021:~# cat /etc/ppp/options
debug       // remove #, open the debug mode
nodetach      // add this
\#logfile /dev/null // comment this line
noipdefault
```

3. open the lte module

```
echo 0 > /sys/class/gpio/gpio40/value 
```

4. pppd dial

```
root@DSGW-021:~# pppd call dial
 timeout set to 3 seconds
 send (ate0^M)
 expect (OK)
 ^M
 OK
 -- got it
 
 send (at^M)
 expect (OK)
 ^M
 ^M
 OK
 -- got it
 
 send (AT+CSQ^M)
 expect (OK)
 ^M
 ^M
 +CSQ: 99,99^M
 ^M
 OK
 -- got it
 
 send (AT+COPS?^M)
 expect (OK)
 ^M
 ^M
 +COPS: 0^M
 ^M
 OK
 -- got it
 
 send (AT+CREG?^M)
 expect (OK)
 ^M
 ^M
 +CREG: 0,0^M
 ^M
 OK
 -- got it
 
 send (AT+CEREG?^M)
 expect (OK)
 ^M
 ^M
 +CEREG: 0,0^M
 ^M
 OK
 -- got it
 
 send (AT+CPIN?^M)
 expect (READY)
```

# 10. Kernel Development DTS Description

This Gateway’s dts file is the ./target/linux/ramips/dts/DSI021.dts

## 10.1 Led

```
gpio-leds {
   compatible = "gpio-leds";

   led_power: power {
    label = "pwrled";
    gpios = <&gpio0 11 1>;
   };

   led_error: error {
    label = "errled";
    gpios = <&gpio1 11 1>;
   };

   led_zigbee: zigbee {
    label = "zigbee";
    gpios = <&gpio1 10 1>;
   };
  };
```

 

## 10.2 Button

``` 
 gpio-keys-polled {
     compatible = "gpio-keys-polled";
     \#address-cells = <1>;
     \#size-cells = <0>;
     poll-interval = <20>;

     pair {
       label = "BTN_0";
       gpios = <&gpio0 3 1>;
       linux,code = <0x100>;
     };
     /*
     wps {
       label = "BTN_1";
       gpios = <&gpio0 2 1>;
       linux,code = <0x101>;
     };
     */
   };
```



## 10.3 Ethernet

```
eernet {
  mtd-mac-address = <&factory 0x28>;
 };
```

## 10.4 wifi

```
&wmac {
  ralink,mtd-eeprom = <&factory 0>;
 };
 &pcie {
  status = "okay";
 };
 
 /**> 5.0G */
 &pcie0 {
  wifi@0,0 {
   compatible = "mediatek,mt76";
   reg = <0x0000 0 0 0 0>;
   mediatek,mtd-eeprom = <&factory 0x8000>;
   ieee80211-freq-limit = <5000000 6000000>;
  };
 };
```



## 10.5 Zigbee

```
&uart1 {
  status = "okay";
 };
```

## 10.6 Bluetooth

Bluetooth use the tty->usb device

```
&ehci {
  status = "okay";
 };

 &ohci {
  status = "okay";
 };
```