# Quick Start Guide

***NOTE: don’t use root account login service to complie the SDK***

# 1 SDK source code

https://drive.google.com/drive/folders/1UD5NQBumgo-Rm7zmsxyRAELx2nQHn3Tc?usp=drive_link

# 2 Untar file

```
mkdir Rockcip_Android11 
cat px30-android11.tar.gz* | tar -zx -C Rockcip_Android11 
cd Rockcip_Android11
```

# 3 One-key compliation

```
source ./build/envsetup.sh;lunch PX30_Android11-userdebug; 
./build.sh -AUKu 
```

NOTE: Install with "apt install" if there are compilation dependencies

# 4 Firmware Location

The firmware will be generated to location: rockdev/Image-PX30_Android11//update.img

# 5 Image Upgrade

## 5.1 Upgrade Tool

Upgrade tool：AndroidTool_Release_v2.69

Upgrade driver：DriverAssitant_v4.91

Use the upgrade tool, must first exe DriverInstall.exe in DriverAssitant_v4.91

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image002.jpg)

 

## 5.2  Go into Upgrade Mode by ADB Switch

1. Connect the OTG port to the burning computer USB port, it's also act as POE power supply
2. click ADB switch in AndroidTool

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image004.jpg)

 

## 5.3 Go into Upgrade Mode by Serial

1. Connect the OTG port to the burning computer USB port, it's also act as 5V power supply
2. Press "Ctrl+C" when uboot is booting up, to enter uboot:

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image006.jpg)



3. comand to reboot the board into maskrom mode, for a complete "update.img" upgrade.

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image009.jpg)

4."rockusb 0 mmc 0" command to reboot board to loader mode, for a partial firmware upgrade or a complete "update.img" upgrade.

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image011.jpg)

## 5.4 The Entire Package of Firmware "update.img" Upgrade

 

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image013.jpg)



## 5.5 Upgrade the Firmware Separately

Todo 

