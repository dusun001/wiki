# Quick Start Guide

# 1. Introduction

This Quick Start Guide explains the basics: 
- how to connect and set up your target on the network; 
- how to install the SDK;  
- how to build the firmware images;
The Linux Software Developer’s Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun’s DSGW-091 gateway.
Base on the 4.4 Linux kernel, and leveraging existing open source software, the SDK simplifies the process of adding custom applications. Device drivers, GNU toolchain, Pre-defined configuration profiles, and sample applications are all in included.

# 2. Gateway Information


## 2.1 Basic information

- OS: Linux
- USB 5V type C Power supply and PoE Power supply
- Processor: Quad-core Cortex-A35 up to 1.3GHz
- RAM: 512MB
- eMMC:4GB
- Support IEEE802.11n, IEEE802.11g, IEEE 802.11b, IEEE 802.11ac Protocol
- Support WIFI
- Support Z-WAVE
- Support Zigbee3.0
- Support Bluetooth 5.2
- Support Lora
- One WAN/LAN variable network portSDRAM: 2GB


# 3. Debug Setup

This section describes how to connect the gateway into your host computer and network.
- Connecting a gateway (Power)
1.Make sure that the power adapter is 5V/3A.
2.Select the appropriate power plug adaptor for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet.
3.Connect the output plug of the power supply to the gateway
<br />

- Connecting a gateway (USB port)
1.Connect one end of the USB cable to the USB port on the laptop or desktop
2.Connect the other end of USB cable to the USB port on the gateway.
![qsg-1](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-091/qsg-1.png)
<br />

- Connecting a PCBA board (Serial Port)
If you want to debug the gateway, you can open the shell, Connect the PC to the PCBA board via Serial to USB tool.
![qsg-2](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-091/qsg-2.png)
<br />


# 4. Compile the Environment to Build
Please use ubuntu 18.04 .iso image to setup your build environment. You can use a virtual machine or a physical PC to install ubuntu 18.04.

## 4.1Virtual Machine
It is recommended that novice users use virtual machines, install ubuntu 18.04 to the virtual machine, and leave enough disk space (at least 100G) for the virtual machine.
<br />

## 4.2Ubuntu PC Compile the Environment to Build
The use of physical machine compilation users can use a ubuntu PC.
<br />

# 5.SDK Acquisition and Preparation
## 5.1Download the source code from the Dusun FTP
The source package name will be DSGW_091_SDK.tar.gz, get it from Dusun FTP.

## 5.2Code Compression Package Check
The next step can be taken only after generating the MD5 value of the source compression package and comparing the MD5 value of the MD5 .txt text to confirm that the MD5 value is the same, and if the MD5 value is not the same, the energy code pack is damaged, please download it again.
```
$ md5sum DSGW_091_SDK*.tar.gz
```

## 5.3The Source Compression Package is Unzipped
Copy the source code to the corresponding directory and unzip the source code compression package.
```
$ sudo -i
$ mkdir workdir
$ cd workdir
$ tar -zxvf  /path/to/DSGW_091_SDK*.tar.gz
```