﻿# Quick Start Guide
## 1. Introduction 
This Quick Start Guide explains the basics:  
- how to connect and set up your target on the network;  
- how to install the SDK;  
- how to build the firmware images.  

The Linux Software Developer’s Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun’s DSGW-095 gateway.

Base on the 4.4.19 Linux kernel, and leveraging existing open source software, the SDK simplifies the process of adding custom applications. Device drivers, GNU toolchain, Pre-defined configuration profiles, and sample applications are all in included.

## 2. Baseboard Information 
This section describes the baseboard’s basic resource infomation and interfaces. 
### 2.1 Basic information 
- SOC: RK3328 
- Quad-core ARM Cortex-A53 Mali-450MP2 GPU
- Power Supply: DC-5V
- LTE module: EG91-NAX
- Wi-Fi module: 6221A (Wi-Fi chip: RTL8821CS)
- Zigbee: EFR32MG1B232F256GM32
- Z-wave: ZGM130S037HGN
- Bluetooth: EFR32BG21A020F768IM32
- Ethernet (10M/100M)  
- DEBUG UART  
- KEY 
- OTG-USB (Type-C)  
- TF card  
- SIM Card 
- eMMC: 32GB
- SDRAM: 2GB
### 2.2 Interface 
![20240225184724](https://dusunprj.oss-us-west-1.aliyuncs.com/20240225184724.png)
![20240225184746](https://dusunprj.oss-us-west-1.aliyuncs.com/20240225184746.png)
![20240225184823](https://dusunprj.oss-us-west-1.aliyuncs.com/20240225184823.png)
![20240225184858](https://dusunprj.oss-us-west-1.aliyuncs.com/20240225184858.png)
![20240225184946](https://dusunprj.oss-us-west-1.aliyuncs.com/20240225184946.png)
Front:
![20240222181208](https://dusunprj.oss-us-west-1.aliyuncs.com/20240222181208.png)

Opposite:
![20240222181748](https://dusunprj.oss-us-west-1.aliyuncs.com/20240222181748.png)

## 3. Debug Setup 
This section describes how to connect the board into your host computer and network to debug for development. 
### 3.1 Power  

- Make sure that the power adapter is 5V.  
- Select the appropriate power plug adaptor for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet.  
- Connect the output plug of the power supply to the gateway 
### 3.2 Wire Connect 
  Connect gateway to a router for login 

### 3.3 Debug Uart Connect 
- Before you set up your development test bed, please connect the PCB serial port to your develop PC via USB-to-serial bridge. 
- PCB serial port on Gateway 
````
​	USB-to-serial bridge. Serial port setting:  
​	Baud rate: 115200  
​	Bits: 8  
​	Stop Bits: 1  
​	Hardware flow control: None  
````
![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image017.jpg)
## 4. SDK Download And Compile 
This section describes how to download the sdk and compile it. 
### 4.1 SDK Envirment Prepare 
Compilation environment: Ubuntu18.04 compilation tool is automatically generated by SDK built, no additional installation is required 
### 4.2 SDK Download 
Get the source code from Dusun FTP server uncompress it under your work directory. For example:  
- download DSGW-095-DB-LUCI-SDK.tar.gz  
````
  $ mkdir -p ~/workdir/dsgw095  
  $ tar -zxvf DSGW-095-DB-LUCI-SDK.tar.gz -C ~/workdir/dsgw095   
  $ cd ~/workdir/dsgw095  
````
- Source reduction  
````
$ git reset --hard 
````
### 4.3 SDK Compile 
- 	Board Select  
$ ./build.sh init processing  
option: init 
============You're building on Linux=========== 
Please choose BoardConfig 
1. BoardConfig_rp3328_buildroot  
2. BoardConfig_rp3328_ubuntu  
3. BoardConfig_rp3328_debian  
   

Please  input num:  
-	Configure debian filesystem  
````
$ tar -zxvf debian.tar.gz  
$ mkdir debian  
$ cp ./debian-rootfs.img ./debian/  
````
-	Configure Ubuntu filesystem  
````
$ tar -zxvf ubuntu.tar.gz  
$ mkdir ubuntu  
$ cp ./ubuntu-rootfs.img ./ubuntu/  
````
-	Bulid  
````
cd ~/workdir/dsgw095  
sudo ./build.sh  
````
### 4.4 SDK Output  
Generate the full firmware file directory: rockdev/update.img 
Update.img contains all firmware for a full upgrade 
If the compilation fails, please according to the error information, their own Baidu or google to solve or view the compilation error common problems document, really can not solve the problem, you can record the complete error information, through technical communication QQ group consultation 
Document directory: network disk /cdrom_rp3328/cdrom_rp3328_document/software file/compilation environment and compilation   
-	Compile uboot separatel  
````
$ ./build.sh uboot  
````
-	Build the kernel separatel  
````
$ ./build.sh kernel  
````
-	Mirror Packaging  
````
$ ./build.sh updateimg  
````
## 5. Firmware Program And Program  
### 5.1 Firmware Program  
#### 5.1.1 USB OTG  
- Driver installation (burn mirror/ADB debugging) 
    1.Unzip driverAsSatant_v4.5 
    2.Open driverinstall.exe 
    3.Click Drive Installation, and it will show that the installation driver is successful 
- Mirror Upgrade Tool 
    1.Unzip AndroidTool_Release_V2.84 
- Enter the upgrade mode 
    1.Connect the 5V power supply and connect the OTG port to the burning computer 
    2.Plug in the voltage and wait for the display of "Found One ADB Device"  
    ![20240222182151](https://dusunprj.oss-us-west-1.aliyuncs.com/20240222182151.png)
    3.Click on the "Switch" , display "Found One LOADER Device"  
    ![20240222182204](https://dusunprj.oss-us-west-1.aliyuncs.com/20240222182204.png)

    4.Click on "Firmware" and select update.img,Click on "Upgrede" to upgrade.
    ![20240222183319](https://dusunprj.oss-us-west-1.aliyuncs.com/20240222183319.png)
- Update. img access: network disk link download or download source code compilation. 
## 6. Gateway Login 
### 6.1 Login Through Debug Uart 
- connect uart serial tool to the board’s debug uart port 

-	config the serial tools’s uart config  

-	power on the gateway 

### 6.2 Login Through Network(SSH) 
-	config the ssh connection parameters
````  
    ssh root@192.168.100.100
````
-	connect success  
````
    <Serial port tools>:# ssh root@192.168.100.100  
    root@192.168.100.100's password: root  
    X11 forwarding request failed on channel 0  
    Welcome to Ubuntu 18.04.6 LTS (GNU/Linux 5.15.0-86-generic x86_64)  

     * Documentation:  https://help.ubuntu.com
     * Management:     https://landscape.canonical.com
     * Support:        https://ubuntu.com/advantage  
      This system has been minimized by removing packages and content that are
      not required on a system that users do not log into.  

    To restore this content, you can run the 'unminimize' command.  
    root@ubuntu:~#  
````
## 7. Application Layer Development 
### 7.1 Ethernet 
This board has one wan port eth0 work as dhcp  
root@debian:~# ifconfig  
````
    eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500  
        inet 192.168.100.105  netmask 255.255.255.0  broadcast 192.168.100.255  
        inet6 fe80::4c18:17fa:c0ce:368e  prefixlen 64  scopeid 0x20<link>         
        ether aa:c8:1b:79:bb:bb  txqueuelen 1000  (Ethernet)  
        RX packets 3124  bytes 219970 (214.8 KiB)  
        RX errors 0  dropped 0  overruns 0  frame 0  
        TX packets 717  bytes 153287 (149.6 KiB)  
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0          
        device interrupt 44   
````
### 7.2 OTG 
The OTG used to program the board. See Section 5.1.1 

### 7.3 I2C 
the board has two i2c bus 
-	i2cdetect   
   root@DUSUN:~# i2cdetect -y 0  

            0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f   
        00: -- -- -- -- -- -- -- -- -- -- -- -- --  
        10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
        20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
        30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
        40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
        50: -- UU -- -- -- -- -- -- -- -- -- -- -- -- -- --  
        60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
        70: -- -- -- -- -- -- -- --  
- i2cdump   
  root@DUSUN:~# i2cdump  -f -y 0 0x51  

        No size specified (using byte-data access)
             0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f    0123456789abcdef
        00: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        10: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??..............
        20: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        30: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??..............
        40: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        50: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??..............
        60: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        70: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??..............
        80: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        90: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??..............
        a0: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        b0: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??..............
        c0: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        d0: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??..............
        e0: 00 05 00 00 10 45 05 22 04 02 24 80 c0 81 81 84    .?..?E?"??$?????
        f0: 02 18 00 00 00 00 00 00 00 00 00 00 00 00 00 00    ??.............. 
-	i2cget  
   i2cget  -f -y 0 0x51 0x00  

        0x00
### 7.4 GPIO 
- see the gpios used by kernel  
  root@DUSUN:~# cat /sys/kernel/debug/gpio  

        GPIOs 0-31, platform/pinctrl, gpio0:
         gpio-2   (                    |sysfs               ) out hi
         gpio-10  (                    |?                   ) out lo
      
        GPIOs 32-63, platform/pinctrl, gpio1:
         gpio-50  (                    |reset               ) out hi
         gpio-56  (                    |gpio_num            ) out hi
      
        GPIOs 64-95, platform/pinctrl, gpio2:
         gpio-66  (                    |gpio_num            ) out lo
         gpio-68  (                    |?                   ) out lo
         gpio-69  (                    |?                   ) out hi
         gpio-79  (                    |sysfs               ) out hi
         gpio-81  (                    |sysfs               ) in  hi IRQ
         gpio-85  (                    |?                   ) out lo
         gpio-90  (                    |sysfs               ) out hi
      
        GPIOs 96-127, platform/pinctrl, gpio3:

•	gpio export N is the gpio number.  

    echo N > /sys/class/gpio/export 

•	gpio out on/off

    echo out > /sys/class/gpio/gpioN/direction  
    echo 1 > /sys/class/gpio/gpioN/value  
    echo 0 > /sys/class/gpio/gpioN/value  

•	gpio in

    echo in > /sys/class/gpio/gpioN/direction 

### 7.5 UART 
The board has one uart used by user ttyS 
•	install minicom 

    apt-get update; apt-get install minicom 

•	config uart

    minicom -s 

  

•	short the uart1 rx and tx 

•	Prees any key, it will receive any key in loopback mode 

### 7.6 KEY 
here is one user key used by user.  
• Pressing the user button  
  root@DUSUN:~# cat /sys/class/gpio/gpio81/value  

    0
• Test Program

    #include <unistd.h> 
    #include <stdio.h> 
    #include <linux/input.h> 
    #include <stdlib.h> 
    #include <sys/types.h> 
    #include <sys/stat.h> 
    #include <fcntl.h> 
    #include <pthread.h>
    #define DEV_PATH "/dev/input/event1" //difference is possible 
    void * thread_func(void *arg) {
        long now = time(NULL);
        while (1) {
            if (time(NULL) - now > 8) {
                exit(-2);
            }
        }
    }
    
    int main() {
        int sys_reset_gpio_pin; char buf[2];
        int val;
        int ret;
        int pressed = 0; 
        int release = 0; 
        int counter = 0;
        
        sys_reset_gpio_pin = open("/sys/class/gpio/gpio55/value", O_RDONLY); 
        if (sys_reset_gpio_pin < 0) {
            printf("can't open system reset pin GPIO file\n");
        }
        
        printf("wait for pressed ... \n"); 
        while(1){
            lseek(sys_reset_gpio_pin, 0, SEEK_SET);
            ret = read(sys_reset_gpio_pin, buf, 2);
    
            buf[1] = '\0'; 
            if (ret == 2) {
                val = buf[0]-'0';
                //TRACE(("Read system reset pin ret = %d, value = %x\n", ret, val)); 
                if (val == 0) {
                    if(release == 1){
                        release = 0;
                        printf("pressed\n");
                    }
                    pressed = 1;
                } else if (val == 1) {
                    release = 1; if(1 ==
                    pressed){ printf("r elease\n"); break;
                }
            }
        }
        usleep(100000); counter += 1;
        if(counter > 50)
        {
            return -1;
        }
    
        }
    
        close(sys_reset_gpio_pin); 
        return 0;
    }
    
   

### 7.7 RECOVERY 
This Key Used to switch the board to MaskRom Mode. 

    root@DUSUN:~# bootm2recovery.sh

### 7.8 RST 
Press and hold the user button for 10 seconds to restart the circuit board. 

### 7.9 LTE

bg96_dial.sh is used for LTE dial.

 ```
# ifconfig eth0 down
#


AT+CPIN?
+CPIN: READY

OK AT+ CSQ
+CSQ: 31,99

OK
...
sent [IPCP ConfAck id=0x1]
rcvd [IPCP ConfNak id=0x3 <addr 172.28.36.150> <ms-dns1 221.131.143.69> <ms-dns2 112.4.0.55>] sent [IPCP ConfReq id=0x4 <addr 172.28.36.150> <ms-dns1 221.131.143.69> <ms- dns2 112.4.0.55>] rcvd [IPCP ConfAck id=0x4 <addr 172.28.36.150> <ms-dns1 221.131.143.69>
<ms-dns2 112.4.0.55>]
Could not determine remote IP address: defaulting to 10.64.64.64 local IP address 172.28.36.150

^Z[1]+            bg96_dial.sh
Stopped
#

lo      Link encap:Local Loopback inet addr:127.0.0.1
Mask:255.0.0.0 inet6 addr:
::1/128 Scope:Host
UP LOOPBACK RUNNING MTU:65536 Metric:1
RX packets:131 errors:0 dropped:0 overruns:0 frame:0 TX packets:131 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1
RX bytes:12350 (12.0 KiB) TX bytes:12350 (12.0 KiB)

ppp0    Link encap:Point-to-Point Protocol
inet addr:172.28.36.150  P-t-P:10.64.64.64  Mask:255.255.255.255
UP POINTOPOINT RUNNING NOARP MULTICAST  MTU:1500
Metric:1
RX packets:6 errors:0 dropped:0 overruns:0 frame:0 TX packets:6 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:3
RX bytes:96 (96.0 B) TX bytes:114 (114.0 B)

wlan0  Link encap:Ethernet HWaddr 20:57:9E:8B:70:F5
inet addr:192.168.10.1 Bcast:0.0.0.0 Mask:255.255.255.0
inet6 addr: fe80::2257:9eff:fe8b:70f5/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:33387 errors:0 dropped:0 overruns:0 frame:0 TX packets:56331 errors:0 dropped:636 overruns:0 carrier:0 collisions:0 txqueuelen:1000
RX bytes:5077398 (4.8 MiB) TX bytes:78164665 (74.5 MiB)
#


You need to configure APN, username/password for BG96, in quectel-chat-connect and *quectel-ppp* file. Before you run the test. 

#cat /etc/ppp/peers/quectel-chat-connect

ABORT "BUSY"
ABORT "NO CARRIER" ABORT "NO DIALTONE" ABORT "ERROR"
ABORT "NO ANSWER" TIMEOUT 5
"" AT OK ATE0
OK AT+CPIN? READY AT
OK AT+CSQ
OK AT+QCFG="nwscanmode" OK AT+QCFG="nwscanseq" OK AT+QCFG="iotopmode" OK AT+QCFG="band"
OK AT+CREG?
OK ATI;+CSUB;+CSQ;+CPIN?;+COPS?;+CGREG?;&D2
# Insert the APN provided by your network operator, default apn is 3gnet    <================ OK AT+CGDCONT=1,"IP","3gnet",,0,0
OK ATD*99# CONNECT
# 
#
#
# cat /etc/ppp/peers/quectel-ppp
# /etc/ppp/peers/quectel-pppd
# Usage:root>pppd call quectel-pppd
#Modem path, like /dev/ttyUSB3,/dev/ttyACM0, depend on your module, default path is /dev/ttyUSB3
/dev/ttyUSB5 115200
#Insert the Username and Password for authentication, default User and Password are test user "test" password "test"    <========================== # The chat script, customize your APN in this file
connect 'chat -s -v -f /etc/ppp/peers/quectel-chat-connect' # The close script
disconnect 'chat -s -v -f /etc/ppp/peers/quectel-chat-disconnect' # Hide password in debug messages
hide-password
# The phone is not required to authenticate noauth
# Debug info from pppd debug
# If you want to use the HSDPA link as your gateway defaultroute
# pppd must not propose any IP address to the peer noipdefault
# No ppp compression novj
novjccomp noccp
ipcp-accept-local ipcp-accept-remote local
# For sanity, keep a lock on the serial line lock
modem dump nodetach
# Hardware flow control nocrtscts
remotename 3gppp ipparam 3gppp
ipcp-max-failure 30
# Ask the peer for up to 2 DNS server addresses usepeerdns
# 
#
#Open GPS CMD:
pppcmd /dev/ttyUSBx "AT+QGPS=1" #Read GPS data:
#cat /dev/ttyUSBy(try: y=x-2 or y=x-1)
#
```````

For more at instructions, please refer to the at instruction documentation for operation instructions

### 7.10 WiFi as AP
the board has one wifi mode ap6212  
•	ifconfig wlan0  
root@DUSUN:~# ifconfig wlan0  

    wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
            inet 192.168.10.1  netmask 255.255.255.0  broadcast 192.168.10.255
            inet6 fe80::2ec3:e6ff:fe5b:7f0  prefixlen 64  scopeid 0x20<link>
            ether 2c:c3:e6:5b:07:f0  txqueuelen 1000  (Ethernet)
            RX packets 0  bytes 0 (0.0 B)
            RX errors 0  dropped 0  overruns 0  frame 0
            TX packets 0  bytes 0 (0.0 B)
            TX errors 0  dropped 13 overruns 0  carrier 0  collisions 0

The "ds_conf_ap.sh" script is for setting up Wi-Fi AP, SSID is "dsap", password is "12345678".

````
#ds_conf_ap.sh 192.168.10.1
start hostapd
Configuration file: /etc/hostapd.conf
wlan0: interface state UNINITIALIZED->COUNTRY_UPDATE start dnsmasq
Stopping dnsmasq: OK Starting dnsmasq: OK Done!!!!!!

# iwconfig

lo  no wireless extensions.

wlan0 IEEE 802.11an ESSID:"dsap" Nickname:"<WIFI@REALTEK>" Mode:Master Frequency:5.745 GHz Access Point: 20:57:9E:8B:70:F5 Bit Rate:72.2 Mb/s Sensitivity:0/0
Retry:off RTS thr:off Fragment thr:off Encryption key:off
Power Management:off
Link Quality=1/100 Signal level=1/100 Noise level=0/100 Rx invalid nwid:0 Rx invalid crypt:0 Rx invalid frag:0
Tx excessive retries:0 Invalid misc:0 Missed beacon:0

eth0    no wireless extensions.

#
# ifconfig
eth0    Link encap:Ethernet HWaddr 0A:11:D3:88:1E:B5
inet addr:192.168.1.4  Bcast:192.168.1.255  Mask:255.255.255.0
inet6 addr: fe80::811:d3ff:fe88:1eb5/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:73386 errors:0 dropped:0 overruns:0 frame:0 TX packets:52722 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1000
RX bytes:64535523 (61.5 MiB) TX bytes:4975499 (4.7 MiB)
Interrupt:40

lo  Link encap:Local Loopback
inet addr:127.0.0.1 Mask:255.0.0.0 inet6 addr: ::1/128 Scope:Host
UP LOOPBACK RUNNING MTU:65536 Metric:1


````
## 7.11  WiFi as STA

Config /etc/wpa_supplicant.conf
````
#cat /etc/wpa_supplicant.conf ctrl_interface=/var/run/wpa_supplicant ctrl_interface_group=0 update_config=1
network={
ssid=" shu fang @``` " psk="dl123456" disabled=1
}
network={
ssid="AAAAAA" scan_ssid=1 psk="12345678"
key_mgmt=WPA-PSK priority=2
}

# iwconfig wlan1

wlan1   unassociated Nickname:"<WIFI@REALTEK>"
Mode:Managed Frequency=2.412 GHz Access Point: Not-Associated Sensitivity:0/0
Retry:off RTS thr:off Fragment thr:off Encryption key:off
Power Management:off
Link Quality:0 Signal level:0 Noise level:0
Rx invalid nwid:0 Rx invalid crypt:0 Rx invalid frag:0 Tx excessive retries:0 Invalid misc:0 Missed beacon:0
#
#wpa_supplicant -B -d -i wlan1 -c /etc/wpa_supplicant.conf
# #
#udhcpc -i wlan1
#

````
### 7.12 LEDS

View LED lights
root@DUSUN:~# ls /sys/class/leds/  

    blue  firefly:blue:user  red  zigbee

•	Lighting up the lights  

    root@DUSUN:~# echo 1 > /sys/class/leds/zigbee/brightness   
•	Turn off the lights  

    root@DUSUN:~# echo 0 > /sys/class/leds/zigbee/brightness  




### 7.13 TF Card
•	Mount TF card  
root@DUSUN:~# mount /dev/mmcblk0 /mnt/

    lost+found

### 7.14 Kernel Development DTS Description 
    This Gateway’s dts file is the rp-rk3328.dts 

## 7.15 Wireless development (Zigbee, Z-Wave, BLE, LoRaWAN)

 Please build a debian system to do the following steps. The code will be compiled on the board, not on host.

````
root@DUSUN:~# apt-get update
root@DUSUN:~# apt-get install libncurses5-dev 
root@DUSUN:~# apt-get install libreadline-dev 
root@DUSUN:~# apt-get install libssl-dev 
root@DUSUN:~# apt-get install libjson-c-dev



1. Prepare some library on the board
2. scp SDK "buildroot/dusun_rootfs/target_scripts/export_zigbee_zwave_ble_gpio.sh" from host to board, under /root

root@DUSUN:~# ./export_zigbee_zwave_ble_gpio.sh 
root@DUSUN:~#

3. Power on wireless modules on board.

````
### 7.15.1  Zigbee

Zigbee interface is /dev/ttyUSB0.

Download "Z3GatewayHost_EFR32MG12P433F1024GM48.tar.gz" from Dusun FTP,

````
root@DUSUN:~# tar xvzf Z3GatewayHost_EFR32MG12P433F1024GM48.tar.gz root@DUSUN:~# cd Z3GatewayHost_EFR32MG12P433F1024GM48
root@DUSUN:~/Z3GatewayHost_EFR32MG12P433F1024GM48#   make
<=============== wait for app build OK
root@DUSUN:~/Z3GatewayHost_EFR32MG12P433F1024GM48# cd build/exe/ 
root@DUSUN:~/Z3GatewayHost_EFR32MG12P433F1024GM48/build/exe# 
root@DUSUN:~/Z3GatewayHost_EFR32MG12P433F1024GM48/build/exe# ls Z3GatewayHost_EFR32MG12P433F1024GM48 ota-files
root@DUSUN:~/Z3GatewayHost_EFR32MG12P433F1024GM48/build/exe#./  Z3GatewayHost_EFR32MG12P433F1024GM48  -n1  -p
/dev/ttyUSB0 -b115200 Reset info: 11 (SOFTWARE)
ezsp ver 0x07 stack type 0x02 stack ver. [6.6.5 GA build 204] Ezsp Config: set source route table size to 0x0064:Error: set: 0x35 Ezsp Config: set security level to 0x0005:Success: set
Ezsp Config: set address table size to 0x0002:Success: set Ezsp Config: set TC addr cache to 0x0002:Success: set Ezsp Config: set stack profile to 0x0002:Success: set
Ezsp Config: set MAC indirect TX timeout to 0x1E00:Success: set Ezsp Config: set max hops to 0x001E:Success: set

Z3GatewayHost_EFR3


Then build Z3Gateway and run.

For more information about Z3Gateway, please visit https://docs.silabs.com/ for more information.
````
### 7.15.2  Z-Wave

Z-Wave interface is /dev/ttyUSB1.

Download " rk3328_zwave_test.tar.gz " from Dusun FTP, and copy it to board, under

/root.

root@DUSUN:~# tar xvzf rk3328_zwave_test.tar.gz root@DUSUN:~# ls
Z3GatewayHost_EFR32MG12P433F1024GM48    export_zigbee_zwave_ble_gpio.sh Z3GatewayHost_EFR32MG12P433F1024GM48.tar.gz rk3328_zwave_test.tar.gz zipgateway
root@DUSUN:~#

Unzip it and you can get ./zipgateway


root@DUSUN:~#  cd  zipgateway/zipgateway-7.13.01-Source/usr/local/src/serialapi
root@DUSUN:~/zipgateway/zipgateway-7.13.01-Source/usr/local/src/serialapi# make clean 
root@DUSUN:~/zipgateway/zipgateway-7.13.01-Source/usr/local/src/serialapi# make
<============= wait for build OK, you get "my_serialapi_test" in ./serialapi

root@DUSUN:~/# ./my_serialapi_test /dev/ttyUSB1 0   // set region: 0 is EU, 1 is US
root@DUSUN:~/# ./my_serialapi_test /dev/ttyUSB1
...
dump: <===
pwj: 10 01 15 5a 2d 57 61 76 65 20 37 2e 31 31 00 07

Vesion: Z-Wave 7.11

dump: ===>
pwj: 01 03 00 08 f4
dump: <==
i
Get init data

dump: ===>
pwj: 01 03 00 02 fe

dump: <===
pwj: 25 01 02 08 08 1d 01 00 00 00 00 00 00 00 00 00
pwj: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
pwj: 00 00 00 07 00

dump: nlist
pwj: 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
pwj: 00 00 00 00 00 00 00 00 00 00 00 00 00

Node [1] GW

 
Now build a zwave simple test tool and run:

In "my_serialapi_test", press 'a' to include zwave device, 'r' to exclude device, 'd' to reset to default, 'i' to get devices list and 'q' toquit.

The Zipgateway is siliabs software, "my_serialapi_test" is just a very simple tool. For more information about Zipgateway, please visit https://docs.silabs.com/ for more information.

- Z-Wave region

If for default Dusun built, Z-Wave frequency can be configuredin

/etc/config/dusun/zwave/region Default is 0x00: EU

| 0x01 – US    | 0x02 – ANZ    | 0x03 – HK     | 0x04 – Malaysia |
| ------------ | ------------- | ------------- | --------------- |
| 0x05 – India | 0x06 – Israel | 0x07 – Russia | 0x08 – China    |
| 0x20 – Japan | 0x21 - Korea  |               |                 |

 

### 7.15.3  BLE

BLE interface is /dev/ttyS1.

Download "rk3328_ble_test.tar.gz" from Dusun FTP, and copy it to board, under /root.

root@DUSUN:~# tar xvzf rk3328_ble_test.tar.gz
root@DUSUN:~# cd bletest/test/ 
root@DUSUN:~/bletest/test#

Unzip it and you can get ./bletest build ble test tool and run:

More information about the BLE test tool, please visit https://docs.silabs.com/for more information.

root@DUSUN:~/bletest/test#  make
<========== wait for build OK, and you get ./build/test 
root@DUSUN:~/bletest/test# ./build/test /dev/ttyS1 115200 -C


## 8. Web Description

- Luci Page
  ![dsgw_095_web](https://dusunprj.oss-us-west-1.aliyuncs.com/dsgw_095_web.png)

  Page operation document instructions, please download
  DSGW-095-Web-Description-V1.1.docx

<<<<<<< HEAD
=======
##  11.  Read firmware image from gateway

Steps for read firmware image from the gateway by Serial is shared  below 

**1.**   Restart to recovery mode bootm2recovery.sh

**2.**   Killall dsupdateimg

**3.**   mount /dev/mmcblk0 /f

**4.**   dd if=/dev/mmcblk2p7 of=/f/rootfs.img bs=10M

**5.**   Restart to normal Debian mode again, copy /f/rootfs.img to the serverand save.

Then You have the file system you need.
>>>>>>> cf302da28dadc86d684652686879720ec409951c




<<<<<<< HEAD








=======
        Tel:86-571-86769027/88810480
        Website: www.dusuniot.com www.dusunremotes.com www.dusunlock.com 
>>>>>>> cf302da28dadc86d684652686879720ec409951c
