# Quick Start Guide

# 1   Introduction

This Quick Start Guide explains the basics: 

- Product Specifications.

- How to connect and set up your device on the network.

- Environment choice for the build process.

- How to prepare the environment with SDK and 3rd party tools.

- How to build the image and partial images.

- How to test and configure the flashed image.

- How to upgrade the firmeware.

- How to manage power and computer resources.


The Linux Software Developer’s Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun’s DSGW-210 gateway. Based on the 4.4 Linux kernel, and leveraging existing open source software, the SDK simplifies the process of adding custom applications. 

Device drivers, GNU toolchain, pre-defined configuration profiles, and sample applications are all included.


# 2   Gateway Specifications

## 2.1  Basic information

**SOC:** RK3328

Quad-core ARM Cortex-A53 Mali-450MP2 GPU 

**Power Supply:** DC-5V

**LTE module:** BG96 (LET CAT-1)

**Wi-Fi module:** 6221A (Wi-Fi chip: RTL8821CS) 

**Zigbee:** EFR32MG1B232F256GM32 

**Z-wave:** ZGM130S037HGN 

**Bluetooth:** EFR32BG21A020F768IM32 

**eMMC:** 8GB 

**SDRAM:** 2GB


## 2.2  Interface

 ![image-20240106094940310](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/2-2-1.png)



# 3 Target Setup


This section describes how to connect the gateway with your host computer and network.

- Connect the gateway – Power

​	1） Make sure that the power adapter is 5V/3A.

​	2）Select the appropriate power plug adapter for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet.

​	3）Connect the output plug of the power supply to the gateway.

- Connect the gateway – USB port

​	1） Connect one end of the USB cable to the USB port on the laptop or desktop.

 2） Connect the other end of the USB cable to the USB port on the gateway.

![image-20240106095018033](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/3-1.png)

Figure3-1. Connection of gateway via USB port

- Connecting the PCBA board – Serial Port

If you want to debug the gateway, you can open the plastic shell and connect the PC directly to the PCBA board via Serial to USB tool.

**PIN on the board for serial connection:** TP1100: RX TP1101:TX

![image-20240106095033064](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/3-2.png)

Figure3-2. Connecting the PCBA via Serial to USB tool



# 4 Environment choice for building the main image

It is mandatory to use an Ubuntu 18.04 .iso image as your build environment. You can use either a virtual machine **(4.a)** or a full fledged physical PC **(4.b)** to host and install Ubuntu 18.04.


## 4.a  Ubuntu 18.04 inside a Virtual Machine 

It is recommended for novice users to use virtual machines.

Install Ubuntu 18.04 as a virtual machine using the .iso image.

**Note:** Make sure to allocate **enough** disk space (at least 100G) to the virtual machine.


## 4.b  Ubuntu 18.04 directly on a physical machine

In the case you don't want to use a virtual machine and want to create the build environment directly on your OS, you must use Ubuntu 18.04 as your OS directly on your PC.


# 5 SDK Acquisition and Preparation

The SDK versions for different chip platforms of Dusun need to be separately requested from the corresponding business departments. For example, your company has already received the SDK for RK3288, and now a new project requires the SDK for RK3328. 

You need to contact the corresponding business department of Dusun for approval, and the business department will assist you in the application process. After the approval of the application, the technical department will reveal the technical information to your company.

**NOTE:** The SDK code released by Dusun follows Google's REPO management method, and it is not recommended for users to delete the SDK's REPO and GIT version records!

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/5-1.png)

## 5.1  Server key generation

1.Enter in the server command line：

```console
ssh-keygen -t rsa -C "xxxx@xxxx.com" 
```

2.Press enter four times, do not enter anything
3.Send ```~/.ssh/id_rsa.pub``` file to Dusun
![img](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/5-1-1.png)

## 5.2 Git Config

Type in the terminal the following commands with your git account data:

```console
git config --global user.email "Your@email.address" 
git config --global user.name "Your Name"
```

## 5.3Downloads SDK
### 5.3.1 Get Repo

*Repo* is a Dusun command line utility that replaces git for this project.

```console
mkdir -p ~/work/project/
cd ~/work/project/
git clone ssh://git@roombanker.x3322.net:2223/dusun_repo.git
```

### 5.3.2 Add Environment Variable

Add ```repo``` to server environment variables and make it executable:

```console
sudo cp -f ~/work/dusun_repo/repo /usr/bin/repo
sudo chmod +x /usr/bin/repo 
```

### 5.3.3 Get Code using ```repo``` command

```console
mkdir -p ~/work/project/dev
cd ~/work/project/dev
../dusun_repo/repo init  -u ssh://git@roombanker.x3322.net:2223/rk3328_linux510/manifests_first.git  -m linux.xml -b dev --no-repo-verify
.repo/repo/repo sync -c -j8
.repo/repo/repo start dev --all
```    


# 6 Code Compilation

## 6.1  Getting started, global Compilation

## 6.1.1  Initialize Compilation Environment Variables (select file system)

You can build *Buildroot*, *Ubuntu* or *Debian* rootfs image. Select the distro during ```./build.sh init``` command

 ```console
 $ ./build.sh init processing option: init
 ============You're building on Linux=========== Please choose BoardConfig
 1.	BoardConfig_rp3328_buildroot
 2.	BoardConfig_rp3328_ubuntu
 3.	BoardConfig_rp3328_debian
 Please input num:
 ```

If you're just starting, we strongly recommend you to build and run the system with Buildroot rootfs to get familiar with the hardware and build environment. 

After you've successfully built the Buildroot system, you can freely try Ubuntu and Debian.

**NOTE**: Since SDK version 5.10, compiling with the default configuration ```rockchip_defconfig``` is enough. If you need to compile a pre-built file system, set the environment variable  ```RK_ROOTFS_SYSTEM ```:

 ```console
export RK_ROOTFS_SYSTEM=debian
 ```

Otherwise, you will obtain a file system built with Buildroot.


## 6.1.2  Prepare the Root File System base (NOTE:Only for Ubuntu and Debian rootfs images)

This section is aimed for building the Ubuntu or Debian file system. If you want to build the *Buildroot* file system, skip this section.

### 6.1.2.a  Compile Ubuntu

Download the rootfs compressed archive ubuntu.tar.gz. The root file system is contained inside the archive：

Decompress the tarball archive:

 ```console
 $tar -xvzf ubuntu.tar.gz	// you get xxx-rootfs.img
 ```

Copy the root file system image to the specified path using these commands:

 ```console
 $ cd workdir/rk3328-linux
 $ mkdir ubuntu
 $ cp /path/to/xxx-rootfs.img  ./ubuntu/ubuntu.img
 ```

### 6.1.2.b  Compile Debian

Download the rootfs compressed archive debian.tar.gz. The root file system is contained inside the archive：

Decompress the tarball archive

 ```console
 $tar -xvzf debian.tar.gz	// you get xxx-rootfs.img
 ```

Copy the root file system image to the specified path using these commands:

```console
$ cd workdir/rk3328-linux
$ mkdir debian
$ cp ./xxxx-rootfs.img ./debian/ linaro-rootfs.img
```

## 6.1.3  Start Compiling

The software package installation commands for compiling the SDK environment are as follows:

 ```console
 $sudo apt-get install git ssh make gcc libssl-dev liblz4-tool expect  libc6-dev libc6-dev-i386 \ 
 g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support python3  python3-pip\ 
  python-dev  swig live-build bison flex fakeroot cmake gcc-multilib  autoconf \ 
 g++-multilib unzip device-tree-compiler ncurses-dev
 ```

Before the initial compilation, perform a cleanall operation:

```console
$ ./build.sh cleanall
```

Build a complete directory of firmware:

```console
$ ./build.sh
```

Build a complete directory of firmware files: ```rockdev/update.img```** and other separate images, *update.img* includes all the firmware needed for a full upgrade.

The build will take a long time, please wait patiently.

After *update.img* has been built, burn it to the board according to **chapter 7**.

**Note:** During the initial compilation, you may encounter the following error: 
![img](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/6-1-3-1.png)

This is caused by the absence of the compilation toolchain in the environment, simply using the compilation toolchain within the SDK will resolve this.

```console
$ export PATH=$PATH:`pwd`/buildroot/output/rockchip_rk3328/host/usr/bin/
```

## 6.1.4  Run The Image on the board

Connect the RK3328 board serial port to the PC via a USB to UART Bridge. Use Putty or other Terminal software as your console tool,


***SERIAL CONSOLE SETTINGS:***

- 115200/8N1

- **Baud:** 115200

- **Data Bits:** 8

- **Parity Bit:** No

- **Stop Bit:** 1


After powering UP the board, you can see the boot log in the console:

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/6-1-4-1.png)

## 6.2  Compiling each image Separately

## 6.2.1  The build system image structure

The *update.img* is composed of several parts. The main parts are: 

1) *uboot.img* - Contains the bootloader uboot.

2) *boot.img* - Contains the device tree .dtb image and Linux kernel image.

3) *recovery.img* - The recovery mode rootfs image used by boot and mount.

4) *rootfs.img* - The normal rootfs image. In normal mode, system boot and mount this rootfs image.


You will need to build the images separately, especially when you focus on single module (e.g. uboot or kernel driver) development. Then you will only need to build that part of image and update the corresponding partition in flash.

**Note:** The order of building these partial images is not defined and can be done in any order. Only the *update.img* must be built last.


## 6.2.a  Build Uboot image

 ```console
 $ ./build.sh uboot
 ```

## 6.2.b  Build Linux Kernel image

 ```console
 $ ./build.sh kernel
 ```

## 6.2.c  Build Recovery File System image

 ```console
 $ ./build.sh recovery
 ```

## 6.2.d  Build File System image

 ```console
 $ ./build.sh rootfs
 ```

## 6.3  Update Image Packaging

 ```console
 $ ./build.sh updateimg
 ```

This command gathers the scattered firmware packaging builds ```rockdev/*.img``` inside the main directory of *update.img*.


# 7 More about Buildroot system

If you use Buildroot rootfs, some Dusun test scripts/tools are already packaged and installed in the final Buildroot rootfs. You can refer to ```buildroot/dusun_rootfs/add_ds_rootfs.sh```


## 7.1  Test hardware components

The following tests are done under the Buildroot system.

## 7.1.1  Test Wi-Fi as Access Point(AP)

The ```ds_conf_ap.sh``` script is for setting up Wi-Fi AP, SSID is "dsap", password is "12345678".

```console
# ds_conf_ap.sh 192.168.10.1
start hostapd
Configuration file: /etc/hostapd.conf
wlan0: interface state UNINITIALIZED->COUNTRY_UPDATE start dnsmasq
Stopping dnsmasq: OK Starting dnsmasq: OK Done!!!!!!
# #
# iwconfig
lo	no wireless extensions.

wlan0 IEEE 802.11an ESSID:"dsap" Nickname:"<WIFI@REALTEK>" Mode:Master Frequency:5.745 GHz Access Point: 20:57:9E:8B:70:F5 Bit Rate:72.2 Mb/s Sensitivity:0/0
Retry:off RTS thr:off Fragment thr:off Encryption key:off
Power Management:off
Link Quality=1/100 Signal level=1/100 Noise level=0/100 Rx invalid nwid:0 Rx invalid crypt:0 Rx invalid frag:0
Tx excessive retries:0 Invalid misc:0 Missed beacon:0

eth0	no wireless extensions.

#
# ifconfig
eth0	Link encap:Ethernet HWaddr 0A:11:D3:88:1E:B5
inet addr:192.168.1.4  Bcast:192.168.1.255  Mask:255.255.255.0
inet6 addr: fe80::811:d3ff:fe88:1eb5/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:73386 errors:0 dropped:0 overruns:0 frame:0 TX packets:52722 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1000
RX bytes:64535523 (61.5 MiB) TX bytes:4975499 (4.7 MiB)
Interrupt:40

lo	Link encap:Local Loopback
inet addr:127.0.0.1 Mask:255.0.0.0 inet6 addr: ::1/128 Scope:Host
UP LOOPBACK RUNNING MTU:65536 Metric:1

```

## 7.1.2  Test Wi-Fi as Station (STA)

Configure ```/etc/wpa_supplicant.conf```:

 ```console
 #cat /etc/wpa_supplicant.conf ctrl_interface=/var/run/wpa_supplicant ctrl_interface_group=0 update_config=1
 network={
 ssid=" shu fang @``` " psk="dl123456" disabled=1
 }
 network={
 ssid="AAAAAA" scan_ssid=1 psk="12345678"
 key_mgmt=WPA-PSK priority=2
 }
 # #
 # iwconfig wlan1
 wlan1	unassociated Nickname:"<WIFI@REALTEK>"
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
 ```

## 7.1.3  Test LTE

```bg96_dial.sh``` script is used for LTE dial. Sample terminal usage:

 ```console
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
 
 ppp0	Link encap:Point-to-Point Protocol
 inet addr:172.28.36.150  P-t-P:10.64.64.64  Mask:255.255.255.255
 UP POINTOPOINT RUNNING NOARP MULTICAST	MTU:1500
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
 ```

Before you run the test you need to configure **APN**, **username/password** for BG96, in ```/etc/ppp/peers/quectel-chat-connect```:

```console
ABORT "BUSY"
ABORT "NO CARRIER" ABORT "NO DIALTONE" ABORT "ERROR"
ABORT "NO ANSWER" TIMEOUT 5
"" AT OK ATE0
OK AT+CPIN? READY AT
OK AT+CSQ
OK AT+QCFG="nwscanmode" OK AT+QCFG="nwscanseq" OK AT+QCFG="iotopmode" OK AT+QCFG="band"
OK AT+CREG?
OK ATI;+CSUB;+CSQ;+CPIN?;+COPS?;+CGREG?;&D2
# Insert the APN provided by your network operator, default apn is 3gnet	<================ OK AT+CGDCONT=1,"IP","3gnet",,0,0
OK ATD*99# CONNECT
```

and ```/etc/ppp/peers/quectel-ppp``` files:

```console
# /etc/ppp/peers/quectel-pppd
# Usage:root>pppd call quectel-pppd
#Modem path, like /dev/ttyUSB3,/dev/ttyACM0, depend on your module, default path is /dev/ttyUSB3
/dev/ttyUSB5 115200
#Insert the Username and Password for authentication, default User and Password are test user "test" password "test"	<========================== # The chat script, customize your APN in this file
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
```


## 7.1.4  Test LED

Sample ```dsled``` command usage:

 ```console
 # dsled
 Usage: dsled [r|g|b] [on/off]
 dsled [r|g|b] [blink_slow|blink_fast] dsled [r|g|b] breathe
 
 #
 # dsled r on
 # dsled b blink_fast
 
 ```

For detailed I2C command, please refer to [link-dsled.zi](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/7-2-1.png)  

 

## 7.1.5  Test I2C

The LED is controlled trough a I2C interface:

 ```console
 # i2cdetect -y 0
 0 1 2 3 4 5 6 7 8 9 a b c d e f 00:	-- -- -- -- -- -- -- -- -- -- -- -- --
 10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 20: -- -- -- 23 -- -- -- -- -- -- -- -- -- -- -- --
 30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 50: -- -- -- -- -- 55 -- -- -- -- -- -- -- -- -- --
 60: -- -- -- -- -- -- -- -- -- -- 6a -- -- -- -- --
 70: -- -- -- -- -- -- -- -- #
 ```

## 7.1.6  Test key

 ```
 #include <unistd.h> #include <stdio.h> #include <linux/input.h> #include <stdlib.h> #include <sys/types.h> #include <sys/stat.h> #include <fcntl.h> #include <pthread.h>
 #define DEV_PATH "/dev/input/event1" //difference is possible void * thread_func(void *arg) {
 long now = time(NULL);
 while (1) {
 if (time(NULL) - now > 8) {
 exit(-2);
 }
 }
 }
```

```
int main() {
int sys_reset_gpio_pin; char buf[2];
int val;
int ret;
int pressed = 0; int release = 0; int counter = 0;

sys_reset_gpio_pin = open("/sys/class/gpio/gpio55/value", O_RDONLY); if (sys_reset_gpio_pin < 0) {
printf("can't open system reset pin GPIO file\n");
}

printf("wait for pressed ... \n"); while(1){
lseek(sys_reset_gpio_pin, 0, SEEK_SET);
ret = read(sys_reset_gpio_pin, buf, 2);

buf[1] = '\0'; if (ret == 2) {
val = buf[0]-'0';
//TRACE(("Read system reset pin ret = %d, value = %x\n", ret, val)); if (val == 0) {
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

close(sys_reset_gpio_pin); return 0;
}
```

## 7.2  How to make menuconfig in Buildroot 

Normal mode Buildroot rootfs config file:  ```buildroot/configs/rockchip_rk3328_defconfig```

Recovery mode Buildroot rootfs config file: ```buildroot/configs/rockchip_rk3328_recovery_defconfig```

```console
#cd buildroot
#make rockchip_rk3328_defconfig #make menuconfig
#mv .config ./configs/rockchip_rk3328_defconfig
```

If you want to change Buildroot configuration, here are the options and commands:

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/7-2-1.png)

Don't forget to run this command afterwards to save changes:

```console
buildroot make menuconfig
```

## 7.3  How to add an application in Buildroot source tree

1. Make directory ```buildroot/dusun_package/<your_app>```

2. Put APP source code files and Makefile to ```buildroot/dusun_package/<your_app>```:

```console
ls buildroot/dusun_package/<your_app>
your_app.h your_app.c Makefile

```

3. Make directory ```buildroot/package/< your_app > Config.in``` your_app.mk

4. Add Config.in sourcing in ```buildroot/package/Config.in``` menu "Dusun software"

```
source "package/dsled/Config.in"
\+    source "package/<your_app>/Config.in" endmenu

```

5. Make menuconfig to select your APP, and save the configuration file like in **5.2**.

```./build.sh rootfs``` to rebuild rootfs

Please refer to ```buildroot/dusun_package/dsled/```, it's a useful example of this.


## 7.4  Switch to Ubuntu or Debian system

If you have built a Buildroot system image, and want to switch to Ubuntu or Debian image. You don't need to clear the make files and do a clean rebuild. Just do the following steps:

1. ```./build.sh init``` and select Ubuntu or Debian.

2. ```/build.sh rootfs``` to rebuild as Ubuntu or Debian rootfs.

3. ```./build.sh``` to build the final *update.img*.


Be careful, the dusun tools and scripts are by default copied to the Buildroot rootfs, not to Ubuntu or Debian rootfs.

If you want to copy them to Ubuntu or Debian rootfs, you can modify the *buildroot/dusun_rootfs/add_ds_rootfs.sh*. For the APPs, you can copy the code to the board and build it on the target board's Ubuntu or Debian system, since it has gcc and other toolchains.

 
## 7.5  Battery

You can check the battery status of the gateway in directory using ```/sys/class/power_supply/bq27546-0/```:

![image-20240105181526168](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/7-5-1.png)

# 8 Wireless development (Zigbee, Z-Wave, BLE, LoRaWAN)

 Please build a Debian system to do the following steps. The code will be compiled on the board, not on host.

1. Prepare the libraries on the board:

```console
root@linaro-alip:~# apt-get update
root@linaro-alip:~# apt-get install libncurses5-dev 
root@linaro-alip:~# apt-get install libreadline-dev 
root@linaro-alip:~# apt-get install libssl-dev 
root@linaro-alip:~# apt-get install libjson-c-dev

```

2. scp SDK ```buildroot/dusun_rootfs/target_scripts/export_zigbee_zwave_ble_gpio.sh``` from host to board, under ```/root```

```console
root@linaro-alip:~# ./export_zigbee_zwave_ble_gpio.sh 
root@linaro-alip:~#
```

3. Power on wireless modules on board.

## 8.1  Zigbee

Zigbee interface is ```/dev/ttyUSB0```.

Download ```Z3GatewayHost_EFR32MG12P433F1024GM48.tar.gz``` from DusunFTP,

```console
root@linaro-alip:~# tar xvzf Z3GatewayHost_EFR32MG12P433F1024GM48.tar.gz root@linaro-alip:~# cd Z3GatewayHost_EFR32MG12P433F1024GM48
root@linaro-alip:~/Z3GatewayHost_EFR32MG12P433F1024GM48#   make
<=============== wait for app build OK
root@linaro-alip:~/Z3GatewayHost_EFR32MG12P433F1024GM48# cd build/exe/ root@linaro-alip:~/Z3GatewayHost_EFR32MG12P433F1024GM48/build/exe# root@linaro-alip:~/Z3GatewayHost_EFR32MG12P433F1024GM48/build/exe# ls Z3GatewayHost_EFR32MG12P433F1024GM48 ota-files
root@linaro-alip:~/Z3GatewayHost_EFR32MG12P433F1024GM48/build/exe#./  Z3GatewayHost_EFR32MG12P433F1024GM48  -n1  -p
/dev/ttyUSB0 -b115200 Reset info: 11 (SOFTWARE)
ezsp ver 0x07 stack type 0x02 stack ver. [6.6.5 GA build 204] Ezsp Config: set source route table size to 0x0064:Error: set: 0x35 Ezsp Config: set security level to 0x0005:Success: set
Ezsp Config: set address table size to 0x0002:Success: set Ezsp Config: set TC addr cache to 0x0002:Success: set Ezsp Config: set stack profile to 0x0002:Success: set
Ezsp Config: set MAC indirect TX timeout to 0x1E00:Success: set Ezsp Config: set max hops to 0x001E:Success: set
...
Z3GatewayHost_EFR3

```

Then build Z3Gateway and run.

For more information about Z3Gateway, please visit https://docs.silabs.com/ for more information.

## 8.2  Z-Wave

Z-Wave interface is ```/dev/ttyS1```.

Download ```rk3328_zwave_test.tar.gz``` from Dusun FTP, and copy it to board, under ```/root```.

```console
root@linaro-alip:~# tar xvzf rk3328_zwave_test.tar.gz root@linaro-alip:~# ls
Z3GatewayHost_EFR32MG12P433F1024GM48	export_zigbee_zwave_ble_gpio.sh Z3GatewayHost_EFR32MG12P433F1024GM48.tar.gz rk3328_zwave_test.tar.gz zipgateway
root@linaro-alip:~#

```

Unzip it and you will get ```./zipgateway```:

 ```console
 root@linaro-alip:~#  cd  zipgateway/zipgateway-7.13.01-Source/usr/local/src/serialapi
 root@linaro-alip:~/zipgateway/zipgateway-7.13.01-Source/usr/local/src/serialapi# make clean root@linaro-alip:~/zipgateway/zipgateway-7.13.01-Source/usr/local/src/serialapi# make
 <============= wait for build OK, you get "my_serialapi_test" in ./serialapi
 
 root@linaro-alip:~/# ./my_serialapi_test /dev/ttyS1 0   // set region: 0 is EU, 1 is US
 root@linaro-alip:~/# ./my_serialapi_test /dev/ttyS1
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
 
 ```

Now build a zwave simple test tool and run:

In ```my_serialapi_test```, press 'a' to include zwave device, 'r' to exclude device, 'd' to reset to default, 'i' to get devices list and 'q' toquit.

The Zipgateway is silabs software, ```my_serialapi_test``` is just a very simple tool. For more information about Zipgateway, please visit https://docs.silabs.com/ for more information.

- Z-Wave region

If for default Dusun built, Z-Wave frequency can be configured in ```/etc/config/dusun/zwave/region``` 

```
Default is 0x00: EU

| 0x01 – US    | 0x02 – ANZ    | 0x03 – HK     | 0x04 – Malaysia |
| ------------ | ------------- | ------------- | --------------- |
| 0x05 – India | 0x06 – Israel | 0x07 – Russia | 0x08 – China    |
| 0x20 – Japan | 0x21 - Korea  |               |                 |
```
 

## 8.3  BLE

BLE interface is ```/dev/ttyUSB1```.

Download ```rk3328_ble_test.tar.gz``` from Dusun FTP, and copy it to board, under ```/root```.

```console
root@linaro-alip:~# tar xvzf rk3328_ble_test.tar.gz
root@linaro-alip:~# cd bletest/test/ 
root@linaro-alip:~/bletest/test#

```

Unzip it and you can get ```./bletest``` build ble test tool and run.

More information about the BLE test tool, please visit https://docs.silabs.com/for more information.

```console
root@linaro-alip:~/bletest/test#  make
<========== wait for build OK, and you get ./build/test 
root@linaro-alip:~/bletest/test# ./build/test /dev/ttyUSB1 115200 -C

```



## 8.4  LoRaWAN

Choose the correct interface for LoRaWAN, for example ```/dev/spidev32766.0```.

The configuration file for it is in ```./sx1302_hal/packet_forwarder/global_conf.json```.

Download ```sx1302_hal_0210.tar.gz``` from Dusun FTP, and copy it to board, under ```/root```.

 ```console
 root@linaro-alip:~# tar xvzf sx1302_hal_0210.tar.gz 
 root@linaro-alip:~# cd sx1302_hal/
 ```

Untar it and you can get ```./sx1302_hal```.

build LoRaWAN sample code ```sx1302_hal``` and run.

More information about the LoRaWAN code, please visit https://[www.semtech.com/products/wireless-rf/lora-core/sx1302 ](http://www.semtech.com/products/wireless-rf/lora-core/sx1302)for more information.

 ```console
 root@linaro-alip:~/sx1302_hal# make all
 <========== wait for build OK, and you get ./packet_forwarder/ 
 root@linaro-alip:~/sx1302_hal/packet_forwarder# ./lora_pkt_fwd
 
 ```

# 9 Image Upgrade

## 9.1  Upgrade Tool

**Upgrade tool**：AndroidTool_Release_v2.69

**Upgrade driver**：DriverAssitant_v4.91

To use the upgrade tool, you must first execute ```DriverInstall.exe``` from ```DriverAssitant_v4.91```

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-1-1.png)

 

## 9.2  Upgrade Mode using ADB Switch

1. Connect the OTG port to the USB port of the computer that will be flashing it, it will also act as a POE power supply.

2. Click ADB switch in AndroidTool

![image-20240423162524460](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-2-1.png)


## 9.3  Upgrade Mode using Serial

1. Connect the OTG port to the USB port of the computer that will be flashing it, it will also act as a 5V power supply.

2. Press "Ctrl+C" when uboot is booting up, to stop booting and to enter uboot

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-3-1.png)

3.While in ```uboot``` use ```rbrom``` command to reboot the board into maskrom mode, for a full ```update.img``` upgrade

 ![image-20240105182402001](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-3-2.png)


4.Use the ```rockusb 0 mmc 0``` command to reboot the board to loader mode, for a partial firmware upgrade.

![image-20240105182414469](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-3-3.png)


## 9.4  Upgrade Mode using Reset button

Press and hold the RST button when the gateway is powered，wait until the gateway led light changes from red to green, then release the button immediately.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-4-1.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-4-2.png)


## 9.5  Complete Firmware upgrade - ```update.img``` upgrade

![image-20240105182455755](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-5-1.png) 



## 9.6  Partial firmware upgrade

 ![image-20240105182507304](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/210/9-6-1.png)



# 10 Power management configuration

The battery management chip used in this design is BQ25895 .

Methods to optimize CPU power consumption are listed:

- Adjust CPU Frequency using the cpufreq parameters.

```console
/* the default frequency scaling strategy used is interactive, relative parameters are as follows: */ ls -l /sys/devices/system/cpu/cpu0/cpufreq/interactive
go_hispeed_load	/* when the loading is larger than go_hispeed_load and the frequency is smaller than hispeed_freq, directly jump to hispeed_freq */
hispeed_freq	/* when jumping from low frequency to high frequency, need to jump to hispedd_freq first */
above_hispeed_delay	/* when the frequency is larger than hispeed_freq, the time duration before each frequency increase */
min_sample_time	/* after each frequency increase, if it is to reduce the frequency next time , the time duration before frequency reduce*/
target_loads	/* the target loading of the frequency scaling */ timer_rate	/* the loading sampling time，unit:us */
timer_slack	/* the loading sampling time after cpu entering idle */
boost	/* when the frequency is smaller than hispeed_freq, keep boost to hispeed_freq */
boostpulse	/* when the frequency is smaller than hispeed_freq, boost to hispeed_freq, keep a while */
boostpulse_duration	/* time duration of boostpulse, unit:us */ io_is_busy	/* whether to compute io wait to cpu loading */

We mainly adjust three parameters: hispeed_freq，target_loads，timer_rate: 
6 hispeed_freq: select an appropriate transition frequency, to make cpustable
in the medium frequency, with the best power consumption, too large or toosmall will cause cpu jump to high frequency easily and increase the power consumption. 
7 target_loads:easier to run with low frequency after this value is increased,
both the power consumption and the performance will be reduced.
8 timer_rate: easier to run with low frequency after this value isincreased, both the power consumption and the performance will be reduced.

```

- Shut down some cpu cores and limit the highest frequency of cpu

```console
/* close cpu2，cpu3 */
echo 0 > /sys/devices/system/cpu/cpu2/online echo 0 > /sys/devices/system/cpu/cpu3/online

/* List all the available frequency */
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies output: 408000 600000 816000 1008000 1200000 1296000

/* set the max frequency of cpu0 to 1200MHz */
echo 1200000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_max_freq

```

- SoC with ARM Big-Little architecture can assign the tasks with high energy load to the little cores through CPUSET since the energy efficiency of the little cores is better.

**Note**: SoC with SMP architecture can also bind the tasks to some cpu cores so that other cores can enter low power consumption mode, but it might make cpu easier to run on a higher frequency, which will increase the power consumption.

```console
/* create group of litte core*/ 
mkdir /dev/cpuset/little
/* set cpu used by group of little core */ 
echo 0-3 > /dev/cpuset/little/cpus
/* add pid=1111 task into the group of little core */ 
echo 1111 > /dev/cpuset/little/tasks
/* Android system creates several groups by default, the framework layer puts the tasks into differenct groups, you can adjust cpus of each group, analyze the power consumption */
ls /dev/cpuset background foreground
system-background top-app

```

- Limit the cpu bandwidth of the tasks with high loading through CPUCTL (**Note**: You need to enable the macro CONFIG_CFS_BANDWIDTH first).

```console
/* create the group of bandwidth limitation */ 
mkdir /dev/cpuctl/mygroup
/* set the cycle of bandwidth limitation as 10ms */ 
echo 10000 > /dev/cpuctl/mygroup/cpu.cfs_quota_us
/* within each cycle, total running time of the tasks in the group cannot exceed 5ms, this value can be larger than cfs_quota_us, because it is the total running time of multiple cpus */
echo 5000 > /dev/cpuctl/mygroup/cpu.cfs_period_us
/* add relative tasks into the group */ 
echo 1111 > /dev/cpuctl/mygroup/tasks echo 1112 > /dev/cpuctl/mygroup/tasks
/* cpu.shares means to limit the bandwidth of the task through weight, used for performance optimization, without affecting the power consumption */
/dev/cpuctl/mygroup/cpu.shares
```

 

# 11.  Read firmware image from gateway

Steps for reading a firmware image from the gateway using Serial:

**1.**   Restart to recovery mode ```bootm2recovery.sh```

**2.**   ```Killall dsupdateimg```

**3.**   ```mount /dev/mmcblk2p8 /f```

**4.**   ```dd if=/dev/mmcblk2p7 of=/f/rootfs.img bs=10M```

**5.**   Restart to normal Debian mode again, copy ```/f/rootfs.img``` to the server and save.

This way you have retrieved the file system you need.
