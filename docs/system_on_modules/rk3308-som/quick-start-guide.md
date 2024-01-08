# Quick Start Guide

# 1.  Introduction

Generally, unless the hardware is damaged, the development board will not change bricks. If there is an accident during the upgrade process ,bootloader breakdownCause that it cannot be upgraded again, you can still enter MaskRom mode to repair.

 

### 1.1 Downloads Image

Goto https://support.dusuniot.com/hc/en-us 
Select Core Board
Get image DSOM-050R-RK3308_img_debian-AV1.0.0.img

### 1.2 Upgrade method

Firmware upgrade is supported in the following ways, Upgrade firmware using USB cable Use USB cable to connect the motherboard to the computer, and use the upgrade tool to burn the firmware onto the motherboard.

### 1.3 Startup Mode

There are three startup modes

- Normal Mode
- Loader Mode
- MaskRom Mode

### 1.3.1 Normal Mode

Normal Mode is the normal startup process. Each component is loaded in turn and enters the system normally

### 1.3.2 Loader Mode

In the Loader mode, the bootloader will enter the upgrade status and wait for the host command for firmware upgrade. To enter the Loader mode, you must make the bootloader detect that the RECOVERY key is pressed and the USB is connected when starting.

The method to put the device into upgrade mode is as follows: One way is to disconnect the power adapter

1. Type-C data cable connects the device and host
2. Press and hold the RECOVERY key on the device and hold
3. Plug in the power supply
4. After about two seconds, release the RECOVERY key

Another way is to connect the power adapter

1. Type-C data cable connects the device and host

2. Press and hold the RECOVERY key on the device and hold
3. Briefly press the RESET key
4. After about two seconds, release the RECOVERY key

### 1.3.3 MaskRom Mode

MaskRom mode is used for system repair when bootloader is damaged.

Generally, you do not need to enter the MaskRom mode. Only if the bootloader verification fails (the IDB block cannot be read, or the bootloader is damaged), the BootRom code will enter the MaskRom mode. At this time, the BootRom code waits for the host to transfer the bootloader code through the USB interface, load and run it.

# 2.  Upgrade firmware using USB cable

 

### 2.1 Prepare firmware

The firmware can be obtained by compiling the SDK, or by downloading the public firmware (unified firmware) from the resource download site. There are generally two types of firmware files:

- Single unified firmware

Unified firmware is a single file packaged and consolidated by all files such as partition table, bootloader, uboot, kernel, system, etc. The firmware officially released by Firefly adopts the unified firmware format. Upgrading the unified firmware will update the data and partition table of all partitions on the motherboard, and erase all data on the motherboard.

- Multiple partition mirrors

That is, files with independent functions, such as partition table, bootloader, kernel, are generated at the development stage. The independent partition image can only update the specified partition while keeping the data of other partitions intact. It will be very convenient for debugging during the development process.

Though the unified firmware unpacking/packaging tool, you can unpack the unified firmware into multiple partition images, or merge multiple partition images into one unified firmware.

### 2.2 Install the burning tool

### 2.2.1 Windows operating system

- Installing the RK USB drive

Download Release_ DriverAssistant.zip, extract it, and then run DriverInstall.exe. In order to use the updated driver for all devices, please select Driver Uninstall before selecting Driver Installation

- Run AndroidTool RKDevTool.exe

Download AndroidTool, decompress and run RKDevTool_ Release_ RKDevTool.exe in the v2.xx directory (note that if it is Windows 7/8, you need to press the right mouse button and select Run as administrator), as shown below:

![image-20240108175349000](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108175349000.png)

### 2.2.2 Linux operating system

No need to install device driver under Linux

- Linux_ Upgrade_ Tool

Download Linux_ Upgrade_ Tool, and install it into the system in the following way for easy calling:

``` 
unzip Linux_Upgrade_Tool_xxxx.zip 
cd Linux_UpgradeTool_xxxx
sudo mv upgrade_tool /usr/local/bin
sudo chown root:root /usr/local/bin/upgrade_tool 
sudo chmod a+x /usr/local/bin/upgrade_tool
```

### 2.3 Enter upgrade mode

### 2.3.1 Loader Mode

- Enter Loader mode in hardware mode

Connect the device and press the RECOVERY key to enter the Loader upgrade mode. The steps are as follows:

1. Disconnect the power adapter first
2. USB Type-A to Type-C data cable connects the host at one end and the development board at the other end
3. Press and hold the RECOVERY key on the device and hold
4. Connect the power supply
5. After about two seconds, release the RECOVERY key

- Enter Loader mode in software mode

After the Type-C data cable is connected, run the following command to the board at the serial port debugging terminal or adb shell

 ```
 reboot loader
 ```

- View Loader Mode

How to determine whether the board is in Loader mode? We can use tools to view

1、Windows operating system

The following prompt can be seen through the Android Tool tool

![image-20240108175716721](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108175716721.png) 

If the operation of "Enter Loader Mode" is carried out, and you still do not see the

burning tool prompt LOADER, you can check whether the Windows host prompts you to discover new hardware and configure drivers. Open the device manager and see the new device Rockusb Device, as shown in the following figure. If not, you can return to the previous step to reinstall the driver.

**Computer Manager ->System Tools->Device Manager**

 ![image-20240108180241279](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108180241279.png)

2、Linux operating system

After Run upgrade_tool, you can see the prompt of a Loader in the connected device

```
firefly@T-chip:~/severdir/down_firmware$ sudo upgrade_tool List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x330c,LocationID=106	Loader
Found 1 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:q
```

### 2.3.2 MaskRom mode

For the method of entering MaskRom mode, please refer to 《MaskRom Mode》

### 2.4 Burn firmware

### 2.4.1 Windows operating system

Burn and write unified firmware update.img

The steps for burning the unified firmware update.img are as follows:

1. Switch to the Upgrade Firmware page.
2. Press the Firmware button to open the firmware file to be upgraded. The upgrade tool displays detailed firmware information.
3. Press the Upgrade button to start the upgrade.
4. If the upgrade fails, you can try to erase the Flash by pressing the EraseFlash button first, and then upgrade.

Note: If the version of the firmware loader you burned is inconsistent with that of the original machine, please execute EraseFlash before upgrading the firmware.

 ![image-20240108180342548](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108180342548.png)

3、Burn and write partition image

The steps to burn the partition image are as follows:

1. Switch to the Upgrade Firmware page.
2. Check the partition to be burned. You can select multiple partitions.
3. Make sure the path of the image file is correct. If necessary, click the blank table cell on the right of the path to reselect it.
4. Click the Run button to start the upgrade. After the upgrade, the device will restart automatically.

![image-20240108180433600](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108180433600.png)

### 2.4.2 Linux operating system

 1、Burn and write unified firmware update.img

```
sudo upgrade_tool uf update.img
```

If the upgrade fails, you can try to erase it before upgrading.

``` 
# To erase flash and use the ef parameter, you need to specify the loader file or the corresponding update.img
sudo upgrade_tool ef update.img	#update.img : You need to burn Ubuntu firmware
# Re-burning
sudo upgrade_tool uf update.img
```

2、Burn and write partition image

```                                                                                          
sudo upgrade_tool di -b /path/to/boot.img 
sudo upgrade_tool di -r /path/to/recovery.img sudo upgrade_tool di -m /path/to/misc.img 
sudo upgrade_tool di -u /path/to/uboot.img 
sudo upgrade_tool di -dtbo /path/to/dtbo.img
sudo upgrade_tool di -p paramater	#烧写 parameter
sudo upgrade_tool ul bootloader.bin # 烧写 bootloader
```

3、 How to forcibly enter the MaskRom mode

If the board cannot enter Loader mode, you can try to enter MaskROM mode by force. See MaskRom Mode for operation method

4、Burn failure analysis

If a Download Boot Failure occurs during the burning process, or an error occurs during the burning process, as shown in the figure below, it is usually caused by poor connection of the USB cable used, poor quality wire, or insufficient drive capacity of the USB port of the computer, please replace the USB cable or the USB port of the computer for troubleshooting.

 ![image-20240108180654228](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240108180654228.png)



# 3.  Compile Environment Construction

This chapter describes the compilation process of the Linux SDK

Note:

(1) It is recommended to develop under the Ubuntu 18.04 system environment. If other system versions are used, the compilation environment may need to be adjusted accordingly.

(2) Compile with normal users, not with root privileges.

### 3.1 Install dependent packages

```
sudo apt-get install repo git ssh make gcc libssl-dev liblz4-tool \
expect g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support \ qemu-user-static live-build bison flex fakeroot cmake gcc-multilib g++-multilib \ unzip device-tree-compiler python-pip ncurses-dev python-pyelftools
```

### 3.2 Downloads SDK

Goto https://support.dusuniot.com/hc/en-us 

Select Core Board

get SDK DSOM-050R-RK3308_sdk_debian_AV1.0.0.tar.gz

 

# 4.  Compiling Debian Firmware

There are two ways to setup a build environment

### 4.1 Compile SDK

The configuration files of different boards are stored in the directory : device/rockchip/rk3308/

Go back to the SDK root directory execute build.sh to select the configuration file.

 ```
./build.sh roc-rk3308b-cc-plus-ubuntu.mk
 ```

The configuration file will be linked to device/rockchip/. BoardConfig.mk. Check the file to verify whether the configuration is successful

Related configurations：

```
# Target arch
export RK_ARCH=arm64 # 64-bit ARM architecture
# Uboot defconfig
export RK_UBOOT_DEFCONFIG=firefly-rk3308-debug-uart4 # u-boot config
# Kernel defconfig
export RK_KERNEL_DEFCONFIG=firefly-rk3308b_linux_defconfig # kernel config
# Kernel dts
export RK_KERNEL_DTS=rk3308b-roc-cc-plus-amic_emmc # dts file
# parameter for GPT table
export RK_PARAMETER=parameter-64bit-ubuntu.txt # 分区表 Partition table
# rootfs image path
export RK_ROOTFS_IMG=ubuntu_rootfs/rk3308-ubuntu_rootfs.img # Root file system path
```



### 4.2 Download Debian Root File System

Download the root file system: Ubuntu root file system (64 bit), and put it under the SDK path

Place the root file system in ubuntu of the SDK_ Under the rootfs/directory

```
mkdir ubuntu_rootfs
mv ubuntu-aarch64-rootfs.img ubuntu_rootfs/rk3308-ubuntu_rootfs.img
```

### 4.3 Fully automatic compilation

 Full-automatic compilation will perform all compilation and packaging operations and directly generate RK firmware.

```
./build.sh        
```

### 4.4 Partial compilation

- Compile u-boot

 ```
 ./build.sh uboot        
 ```

- Compile kernel

 ```
 ./build.sh kernel 
 ```

- Compile recovery

 ```
 ./build.sh recovery        
 ```

### 4.5 update link

Update the image link of each part to the rockdev/directory

 ```
 ./mkfirmware.sh 
 ```

## 4.6 Packaging firmware

Package the firmware, and the generated complete firmware will be saved to the rockdev/pack/directory.

 ```
 ./build.sh updateing        
 ```

## 4.7 Partition description

### 4.7.1 Partition table

 The parameter.txt file contains the partition information of the firmware. Take parameter- ubuntu-fit.txt as an example:

Path

```
device/rockchip/rk3308/parameter-64bit-ubuntu.txt
```

 ```
 
 FIRMWARE_VER:8.1 MACHINE_MODEL:RK3308 MACHINE_ID:007 MANUFACTURER: RK3308 MAGIC: 0x5041524B ATAG: 0x00200800 MACHINE: 3308 CHECK_MASK: 0x80 PWR_HLD: 0,0,A,0,1 TYPE: GPT
 CMDLINE:
 mtdparts=rk29xxnand:0x00001000@0x00002000(uboot),0x00001000@0x00003000(trust),0x00000800@0x 00004000(misc),0x0000A000@0x00004800(recovery),0x0000A000@0x0000E800(boot),0x00100000@0x000
 18800(rootfs),-@0x118800(userdata:grow) uuid:rootfs=614e0000-0000-4b53-8000-1d28000054a9
 ```

CMDLINE attribute is our focus. Take uboot as an

example, 0x00001000@0x00002000 (uboot) 0x00001000 is the starting position of the uboot partition, 0x00002000 is the size of the partition, and so on

### 4.7.2 package-file

The package-file file is used to determine the required partition image and image path when packaging firmware, and it needs to be consistent with the parameter.txt file.

Path:

``` 
tools/linux/Linux_Pack_Firmware/rockdev/rk3308-package-file-ubuntu
```

```
#NAME	Relative path
#
#HWDEF	HWDEF
package-file	package-file
bootloader	Image/MiniLoaderAll.bin parameter	Image/parameter.txt trust	Image/trust.img
uboot	Image/uboot.img boot	Image/boot.img rootfs	Image/rootfs.img
recovery	Image/recovery.img
#oem		Image/oem.img userdata:grow	RESERVED
misc	Image/misc.img
backup	RESERVED
#update-script update-script
#recover-script recover-scrip
```

# 5.  Others

For more information, please visit official website.