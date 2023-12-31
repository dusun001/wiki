# Quick Start Guide

# 1.  Introduction

This Quick Start Guide explains the basics: how to connect and set up your target on the network; how to install the SDK; and how to build the firmware images. The Linux Software Developer's Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun's CDGW-006 gateway.

 

# 2. Gateway Information

## 2.1 Basic information

Processor: MTK7628 (MIPS24KEc(580MHZ))
Supply:  DC-24V 
LTE CAT1: EC200 
RAM: DDR2 128MB
Nor Flash: 32MB

## 2.2 Interface

 ![image-20240106165459280](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165459280.png)

![image-20240106165505369](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165505369.png)

![image-20240106165510714](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165510714.png)

![image-20240106165519203](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165519203.png)


# 3. Target Setup

This section describes how to connect the gateway into your host computer and network.

## 3.1 Connecting a gateway - Power

- Make sure that the power adapter is 24V 2-Pins Cresnet interface.
- Select the appropriate power plug adaptor for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet.
- Connect the output plug of the power supply to the gateway

## 3.2 Connecting a gateway – LAN port

Connect gateway to a router for logging

 ![image-20240106162858707](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106162858707.png)

Figure3-1. Connecting a gateway via Ethernet port

# 4. UART connection to gateway

Before you set up your development test bed, please connect the PCB serial port to your develop PC via USB-to-serial bridge.

- PCB serial port on Gateway

 ![image-20240106162917249](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106162917249.png)

-  USB-to-serial bridge.

![image-20240106162936162](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106162936162.png)

Serial port setting: Baud rate: 57600

Bits: 8

Stop Bits: 1

Hardware flow control: None

# 5.  Compile the Environment to Build

## 5.1 OpenWrt Version

Take OpenwWRT19.07 as an example

## 5.2 PC Compile the Environment to Build

Compilation environment: ubuntu Linux

Openwrt's compilation tool is automatically generated by SDK built, no additional installation is required

## 5.3 OpenWrt configuration and compilation

Get the source code from Dusun FTP server or github and uncompress it under your work directory.

Github link: https://github.com/openwrt/openwrt.git

Checkout to correct branch after clone, take OpenWRT19.07 as an example,

git checkout openwrt-19.07 git branch –a

 ![image-20240106163115068](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163115068.png)

### 5.3.1    DTS file

1. About DTS file for connecting to Dusun gateway’s hardware, please download in Dusun FTP server.

2. Then move it to the right directory mv DSS300.dts target/linux/ramips/dts/
3. Add the component in file vi target/linux/ramips/image/mt76x8.mk

![image-20240106163455553](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163455553.png)

### 5.3.2  Configure compilation options

1) Configure compilation options

There is already a default configuration in the SDK, which satisfies the basic functions of routing. Customers could also customize the configuration according to their own needs. Command:

```
cd <work_dir>/openwrt/ make menuconfig
Choose system (MediaTek Ralink MIPS)
```

​       ![image-20240106163317592](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163317592.png)

   Select Subtarget MT76x8 based boards

![image-20240106163336450](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163336450.png)

Choose target profile DSS300

![image-20240106163532249](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163532249.png)

 If user want to change kernel configuration 

make kernel_menuconfig

![image-20240106163604651](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163604651.png)

2) Change network configuration

i.   Change LAN configuration to avoid the conflict vi package/base-files/files/bin/config_generate In line 104， change the IP to 192.168.66.1

 ![image-20240106163634577](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163634577.png)

 

ii.  Change WAN configuration

vi target/linux/ramips/base-files/etc/board.d/02_network 

In line 489, set the interface name to wlan0 and eth0,

![image-20240106163727617](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163727617.png)

vi package/base-files/files/etc/init.d/boot

In line 53, add the code in following picture to disable Firewall,

![image-20240106163827596](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163827596.png)

   Just use command 'make V=16', the image built will take a long time.

 ![image-20240106163842203](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106163842203.png)

The target image will be under ./openwrt/bin/targets/ramips/mt76x8/

Image used for update is openwrt-ramips-mt76x8-DSS300-squashfs-sysupgrade.bin

3. Flash firmware to gateway following section 11 System firmware upgrade

   Then log in gateway using ssh,

 ![image-20240106164030706](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106164030706.png)

 

# 6.  Openwrt restore to factory setting

Command:

```
umount /dev/mtdblock6; firstboot
Press 'y' to confirm and then reboot system.
```

 

# 7 Openwrt Add kernel patches

The tool Quilt can be used to add patches.

For detailed steps to add patch to the linux kernel, please follow the guide of tool.

![image-20240106164113248](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106164113248.png)

# 8 Change partitions in the system

User can edit file in vi ./ target/linux/ramips/dts/DSS300.dts to change partitions in the system.

 ![image-20240106164121509](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106164121509.png)

# 9 Add APP component in Openwrt

Take openwrt-sdk/package/dusun/lib_dusun as an example,

If user want to add a new user lever application into openwrt SDK, just follow the example. After code is ready, you still need to add it to config file by "make menuconfig", and select Dusun

![image-20240106165100052](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165100052.png)

   Select libdusun package,

 ![image-20240106165110497](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165110497.png)

Exit and save config, 'make V=99' again, you can get the image with libdusun



# 10 uboot build and upgrade

1. uboot configuration and build

![image-20240106165131951](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165131951.png)

```
cd Uboot 
make
```

You get uboot.img

2. uboot upgrade

Setup tftp server on the development PC, and put uboot.img under tftp root directory.

![image-20240106165201422](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165201422.png)

​         

Make sure connect the board to PC via serial port, reset board and press '9' when current uboot is booting up. Follow the steps in the console:

 ![image-20240106165212169](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165212169.png)

The uboot.img will be downloaded to the board and upgraded, then automatically reset to boot new uboot:

 ![image-20240106165220901](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165220901.png)

# 11 Communication between LTE module

Add pppd support for the LTE module, configure the correct dial up script to LTE connection. The module in use is EC200

 ![image-20240106165241522](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106165241522.png)

 

# 12 RS485/232 driver download and install

Download the file [ch343.c ](https://github.com/WCHSoftGroup/ch343ser_linux/blob/main/driver/ch343.c)and [ch343.h ](https://github.com/WCHSoftGroup/ch343ser_linux/blob/main/driver/ch343.h)from https://github.com/WCHSoftGroup
Using the MobaXterm tool to put the downloaded file in a folder: openwrt_19.07/build_dir/target-mipsel_24kc_musl/linux-ramips_mt76x8/linux- 4.14.171/drivers/usb/serial
Enter character commands: vi makefile and add commands such as box select characters

![image-20240106164708611](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106164708611.png)

  

Enter character commands: vi kconfig, Add commands such as box select characters

![image-20240106164715543](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106164715543.png)

# 13 System firmware upgrade

1. Using sysupgrade in gateway

```
scp user@serverip:~/openwrt-ramips-mt7688-mt7688-squashfs-sysupgrade.bin /tmp/
sysupgrade -n /tmp/openwrt-ramips-mt7688-mt7688-squashfs-sysupgrade.bin
```

2. Using LUCI web server in gateway

​     ![image-20240106164900392](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106164900392.png)  

3. Using Uboot method

Please refer to document update gateway using uboot.pdf

# 14 Others

- For more information, please visit OpenWRT official website.

- For COM1and COM2, the hardware diagram is as follows, RX+ stand for A, and RX- stand for B, please connect RS485accordingly.

 ![image-20240106164951133](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106164951133.png)

 